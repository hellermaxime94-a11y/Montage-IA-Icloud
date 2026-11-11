"""Soft 'creator' sfx pack: airy swooshes with a sweeping band, mouth-style pops, keyboard typing, soft click."""
import numpy as np, wave, subprocess
SR=48000; rng=np.random.default_rng(11)
def save(name,x,peak=-3):
    x=x-np.mean(x); x=x/(np.max(np.abs(x))+1e-9)*10**(peak/20)
    fade=int(.004*SR); x[-fade:]*=np.linspace(1,0,fade)
    with wave.open(name+'.wav','wb') as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((x*32767).astype(np.int16).tobytes())
    subprocess.run(['ffmpeg','-v','error','-y','-i',name+'.wav','-c:a','libmp3lame','-q:a','2',name+'.mp3']); print(name)
def sweep_noise(d, f0, f1, q=1.6, shape=lambda u: np.sin(np.pi*u)**2):
    """noise through a band-pass whose centre glides f0 -> f1 (frame-wise FFT filtering, overlap-add)"""
    n=int(d*SR); hop=256; win=np.hanning(1024); out=np.zeros(n+1024); noise=rng.standard_normal(n+1024)
    for i in range(0,n,hop):
        u=i/n; fc=f0*(f1/f0)**u; seg=noise[i:i+1024]*win; X=np.fft.rfft(seg); f=np.fft.rfftfreq(1024,1/SR)
        g=np.exp(-0.5*(np.log(np.maximum(f,1)/fc)/(np.log(2)/q))**2); out[i:i+1024]+=np.fft.irfft(X*g,1024)
    u=np.arange(n)/n; return out[:n]*shape(u)
# swooshes
save('swoosh-a', sweep_noise(.42, 700, 4200, shape=lambda u: np.sin(np.pi*u**0.8)**2))
save('swoosh-b', sweep_noise(.5, 500, 2600, q=1.2, shape=lambda u: np.sin(np.pi*u)**3))
save('swoosh-c', sweep_noise(.36, 1200, 6000, q=2, shape=lambda u: np.sin(np.pi*u**1.3)**2))
save('swoosh-short', sweep_noise(.22, 1500, 5500, q=1.8))
save('swoosh-down', sweep_noise(.5, 4000, 600, q=1.4, shape=lambda u: np.sin(np.pi*u**0.7)**2))
# pops (mouth / bubble pop): fast pitch drop + tiny click
def pop(f0,f1,d=.09):
    t=np.arange(int(.18*SR))/SR; f=f1+(f0-f1)*np.exp(-t/.012); ph=2*np.pi*np.cumsum(f)/SR
    x=np.sin(ph)*np.minimum(1,t/.0015)*np.exp(-t/d*3)
    c=rng.standard_normal(len(t))*np.exp(-t/.0012)*.25; return x+c
save('pop-a', pop(900,260)); save('pop-b', pop(700,190,.1)); save('pop-c', pop(1200,380,.07))
save('pop-big', pop(600,120,.14)+0.5*pop(1000,300,.06))
# typing: keystrokes = bright tick + soft low thock, human timing
def key():
    t=np.arange(int(.06*SR))/SR; n=rng.standard_normal(len(t))
    X=np.fft.rfft(n); f=np.fft.rfftfreq(len(n),1/SR); X[(f<2000)|(f>9000)]=0; tick=np.fft.irfft(X,len(n))*np.exp(-t/.004)
    thock=np.sin(2*np.pi*rng.uniform(180,260)*t)*np.exp(-t/.012)*.6
    return (tick+thock)*rng.uniform(.6,1)
def typing(d, rate=11):
    n=int(d*SR); x=np.zeros(n+SR); t=0.0
    while t<d: k=key(); i=int(t*SR); x[i:i+len(k)]+=k; t+=rng.uniform(.6,1.4)/rate
    return x[:n+int(.06*SR)]
save('typing-short', typing(.45)); save('typing-med', typing(.95)); save('typing-long', typing(1.6))
# soft click (UI tap)
t=np.arange(int(.05*SR))/SR; save('click', np.sin(2*np.pi*2200*t)*np.exp(-t/.006)+.5*np.sin(2*np.pi*600*t)*np.exp(-t/.01))
