import numpy as np, wave, subprocess, sys
SR=48000; rng=np.random.default_rng(7)
def T(d): return np.arange(int(SR*d))/SR
def env(t,a,d): return np.minimum(1,t/a)*np.exp(-t/d)
def bp(x,lo,hi):
    X=np.fft.rfft(x); f=np.fft.rfftfreq(len(x),1/SR); X[(f<lo)|(f>hi)]=0; return np.fft.irfft(X,len(x))
def save(name,x):
    x=x/ (np.max(np.abs(x))+1e-9) * 10**(-3/20)
    pcm=(x*32767).astype(np.int16)
    with wave.open(name+'.wav','wb') as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
    subprocess.run(['ffmpeg','-v','error','-y','-i',name+'.wav','-c:a','libmp3lame','-q:a','2',name+'.mp3']); print(name)
# 1 sub drop (deep boom with a pitch dive)
t=T(1.1); f=45+160*np.exp(-t/0.035); ph=2*np.pi*np.cumsum(f)/SR
x=np.tanh(2.2*np.sin(ph))*env(t,.002,.35); x+=0.4*bp(rng.standard_normal(len(t)),60,900)*env(t,.001,.03); save('sub-drop',x)
# 2 ding (bright bell)
t=T(1.0); x=sum(a*np.sin(2*np.pi*f*t+ 1.2*np.sin(2*np.pi*f*1.41*t)*np.exp(-t/.15))*np.exp(-t/d) for f,a,d in [(2093,1,.45),(4186,.35,.25),(6280,.15,.12)]); save('ding',x)
# 3 sparkle / glint
t=T(.6); x=np.zeros(len(t))
for k in range(9):
    t0=k*0.045+rng.uniform(0,.02); f=rng.uniform(4200,8800); tt=np.clip(t-t0,0,None)
    x+=(t>t0)*np.sin(2*np.pi*f*tt)*np.exp(-tt/.06)*(0.9**k)
save('sparkle',x)
# 4 cash register (drawer clunk + two bells)
t=T(.9); x=0.8*bp(rng.standard_normal(len(t)),300,3000)*env(t,.001,.04)
for t0,f in [(0.06,2637),(0.11,3520)]:
    tt=np.clip(t-t0,0,None); x+=(t>t0)*(np.sin(2*np.pi*f*tt)+.4*np.sin(2*np.pi*f*2.76*tt))*np.exp(-tt/.25)
save('cash',x)
# 5 glitch (digital stutter)
t=T(.32); x=np.zeros(len(t)); n=len(t); seg=int(.02*SR)
for i in range(0,n,seg):
    kind=rng.integers(3); s=np.arange(min(seg,n-i))/SR
    if kind==0: x[i:i+len(s)]=np.sign(np.sin(2*np.pi*rng.uniform(200,1600)*s))*.6
    elif kind==1: x[i:i+len(s)]=rng.standard_normal(len(s))*.5
x*=env(t,.002,.2); save('glitch',x)
# 6 record scratch (two pitch sweeps of filtered noise)
t=T(.42); base=bp(rng.standard_normal(len(t)),500,6000)
m=np.abs(np.sin(2*np.pi*4.8*t)); x=base*m*env(t,.005,.25); tone=np.sin(2*np.pi*np.cumsum(300+900*m)/SR)*.35*env(t,.005,.2); save('scratch',x+tone)
# 7 typewriter (keys + carriage ding)
t=T(.7); x=np.zeros(len(t))
for t0 in [0,.08,.15,.24,.31]:
    tt=np.clip(t-t0,0,None); x+=(t>t0)*bp(rng.standard_normal(len(t)),1500,9000)*np.exp(-tt/.008)
tt=np.clip(t-.42,0,None); x+=(t>.42)*.6*np.sin(2*np.pi*3150*tt)*np.exp(-tt/.15); save('typewriter',x)
# 8 notification (two-tone pop-up)
t=T(.45); x=np.zeros(len(t))
for t0,f in [(0,988),(0.11,1480)]:
    tt=np.clip(t-t0,0,None); x+=(t>t0)*(np.sin(2*np.pi*f*tt)+.2*np.sin(4*np.pi*f*tt))*np.exp(-tt/.12)
save('notif',x)
# 9 fast whoosh (airy, short)
t=T(.35); n=rng.standard_normal(len(t)); x=bp(n,900,7000)*np.sin(np.pi*np.clip(t/.35,0,1))**4; save('whoosh-fast',x)
# 10 swoosh into impact
t=T(.9); n=bp(rng.standard_normal(len(t)),200,5000); w=np.where(t<.35,(t/.35)**3,0)*n
tt=np.clip(t-.35,0,None); f=50+120*np.exp(-tt/.03); hit=(t>.35)*np.tanh(2*np.sin(2*np.pi*np.cumsum(f)/SR))*np.exp(-tt/.22)
save('swoosh-hit',.6*w+hit)
# 11 finger snap
t=T(.2); x=bp(rng.standard_normal(len(t)),1800,9000)*env(t,.0005,.012)+.3*np.sin(2*np.pi*1100*t)*np.exp(-t/.02); save('snap',x)
# 12 camera flash (shutter + rising whine)
t=T(.7); x=bp(rng.standard_normal(len(t)),1500,9000)*(np.exp(-t/.01)+(t>.06)*np.exp(-np.clip(t-.06,0,None)/.01))
x+=.25*np.sin(2*np.pi*np.cumsum(3000+4000*t)/SR)*(t>.1)*np.exp(-np.clip(t-.1,0,None)/.3); save('flash',x)
