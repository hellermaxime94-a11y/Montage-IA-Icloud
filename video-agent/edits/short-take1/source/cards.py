"""Typographic cards for short-take1 (style maxime): small words typed as spoken, the key word lands big in violet
with an outline and a drop shadow, optional words spoken after it typed on a third line. Times are SOURCE seconds,
converted to the card's local time with files/words.md (source -> short)."""
import json, sys, os, shutil
P = sys.argv[1]
rows = [l.split('|') for l in open(f'{P}/files/words.md') if l.startswith('| ') and l[2].isdigit()]
W = [(float(r[1]), float(r[2]), r[3].strip()) for r in rows]
def sh(src):  # short time of the first word at/after src
    for s, t, w in W:
        if s >= src - 1e-6: return t
    return W[-1][1]
DARK = dict(bg='#1C1B1A', ink='#F5F2EC', out='#FFFFFF', sh='drop-shadow(0 .07em 0 #4B3596) drop-shadow(0 .1em .12em rgba(0,0,0,.55))')
LIGHT = dict(bg='#F5F2EC', ink='#1C1B1A', out='#1C1B1A', sh='drop-shadow(0 .07em 0 #8C76D9) drop-shadow(0 .1em .12em rgba(28,27,26,.35))')
ACC = '#B49CFF'
# (id, theme, src_from, src_to, before [(src, word)], (src, BIG) or (src, BIG, fixed_local_time), after [(src, word)])
cards = [
 ('carton1', DARK, 3.77, 6.05, [(3.81,'selon'),(4.07,'moi,'),(4.31,'tu'),(4.49,'dois')], (4.89,'investir.'), []),
 ('carton2', LIGHT, 23.93, 26.83, [(23.95,'comme'),(24.09,'le'),(24.25,'BAFA,'),(24.63,"t'es"),(25.05,'aussi'),(25.43,'obligé'),(25.61,'de')], (25.83,'payer.'), []),
 ('carton3', DARK, 43.25, 46.07, [(43.33,'parce'),(43.43,"qu'investir")], (44.11,'intelligemment'),
     [(44.63,"ce"),(44.73,"n'est"),(44.99,'pas'),(45.31,'dépenser'),(45.65,'de'),(45.69,"l'argent")]),
 ('carton4', LIGHT, 58.41, 61.15, [(58.43,"c'est"),(58.55,'de'),(58.87,'comprendre'),(59.13,'que'),(59.33,'tu'),(59.59,'investis'),(60.01,'en'),(60.19,'ta')], (60.63,'personne.'), []),
 ('carton5', DARK, 76.03, 78.49, [(76.13,"je"),(76.13,"t'invite"),(76.55,'à'),(76.65,'me'),(76.73,'le'),(76.89,'faire'),(77.27,'savoir'),(77.71,'en')], (77.97,'commentaire.'), []),
]
os.makedirs(f'{P}/source/fonts', exist_ok=True)
FD = os.path.join(os.path.dirname(os.path.abspath(P)), '..', '..', '.claude/skills/short-editing/engine/fonts')
for f in ('Inter.ttf', 'ArchivoBlack.ttf', 'InstrumentSerif-Italic.ttf'): shutil.copy(os.path.join(FD, f), f'{P}/source/fonts/{f}')
out = []
for cid, th, a, b, before, big, after in cards:
    t0 = sh(a); dur = round(sh(b) - t0, 2)
    loc = lambda s: round(max(0, sh(s) - t0), 3)
    sm = [(loc(s), w) for s, w in before]
    bt = big[2] if len(big) > 2 else loc(big[0])
    af = [(loc(s), w) for s, w in after]
    spans = lambda L, cls: ''.join(f'<span class="{cls}">{w}</span>' for _, w in L)
    html = f'''<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{{font-family:I;src:url(fonts/Inter.ttf)}}@font-face{{font-family:A;src:url(fonts/ArchivoBlack.ttf)}}@font-face{{font-family:S;font-style:italic;src:url(fonts/InstrumentSerif-Italic.ttf)}}
html,body{{margin:0;width:1080px;height:1920px;background:{th['bg']};overflow:hidden}}
#w{{position:absolute;left:90px;right:90px;top:0;height:1920px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:28px;padding-bottom:120px;box-sizing:border-box}}
.l{{text-align:center;font:italic 400 84px/1.12 S;color:{th['ink']};letter-spacing:0}}
.l span{{display:inline-block;margin:0 .12em;opacity:0}}
#b{{text-align:center;font:400 150px/1 A;color:{ACC};letter-spacing:-3px;opacity:0;white-space:nowrap;text-transform:uppercase;-webkit-text-stroke:.07em {th['out']};paint-order:stroke fill;padding:0 .06em .12em;filter:{th['sh']}}}
</style></head><body><div id="w"><div class="l" id="s">{spans(sm,'w')}</div><div id="b">{big[1]}</div><div class="l" id="a">{spans(af,'w')}</div></div>
<script>
const T={json.dumps([t for t,_ in sm] + [t for t,_ in af])}, BT={bt}, sp=[...document.querySelectorAll('span.w')], b=document.getElementById('b');
const e=x=>1-Math.pow(1-Math.min(1,Math.max(0,x)),3);
function fit(){{let s=150;b.style.fontSize=s+'px';while(b.scrollWidth>940&&s>60){{s-=4;b.style.fontSize=s+'px';}}}}
document.fonts.ready.then(fit);fit();
window.setT=t=>{{sp.forEach((el,i)=>{{const p=e((t-T[i])/.12);el.style.opacity=p;el.style.transform=`translateY(${{(1-p)*6}}px)`;}});
const q=e((t-BT)/.18);b.style.opacity=Math.min(1,q*1.5);b.style.transform=`scale(${{1.08-.08*q}})`;}};
window.setT(0);
</script></body></html>'''
    open(f'{P}/source/{cid}.html', 'w').write(html)
    out.append(dict(id=cid, dur=dur, short_from=t0, big_at=round(t0 + bt, 2)))
print(json.dumps(out))
