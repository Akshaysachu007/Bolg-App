import {NavLink,Link} from 'react-router-dom';
import {BookOpen,House,SquarePen,Layers,Sun,Moon,X,Leaf} from 'lucide-react';
import {categories} from '../data/samplePosts';import{useUI}from'../context/UIContext';
const nav=[{to:'/',label:'Home',icon:House},{to:'/create',label:'Create Post',icon:SquarePen}];
export default function Sidebar({open,onClose}){
 const {dark,toggleTheme}=useUI();
 return <><div onClick={onClose} className={`${open?'block':'hidden'} fixed inset-0 z-30 bg-black/30 lg:hidden`} />
 <aside className={`${open?'translate-x-0':'-translate-x-full'} fixed inset-y-0 left-0 z-40 flex w-[250px] flex-col border-r border-[#e9e3d9] bg-[#fffcf7] p-6 transition-transform dark:border-[#425047] dark:bg-[#253229] lg:sticky lg:top-0 lg:h-screen lg:w-[230px] lg:translate-x-0`}>
 <div className="mb-12 flex items-center justify-between"><Link to="/" onClick={onClose} className="flex items-center gap-2 font-serif text-2xl font-bold"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest text-white"><Leaf size={22}/></span>Inkspire</Link><button onClick={onClose} aria-label="Close menu" className="lg:hidden"><X/></button></div>
 <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[.18em] text-[#99948a]">Explore</p>
 <nav className="space-y-2">{nav.map(({to,label,icon:Icon})=><NavLink key={to} end={to==='/'} to={to} onClick={onClose} className={({isActive})=>`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${isActive?'bg-[#f5e8dc] text-forest dark:bg-[#3b4c40]':'hover:bg-[#f6eee6]'}`}><Icon size={18}/>{label}</NavLink>)}</nav>
 <div className="mt-10 border-t border-[#e9e3d9] pt-7 dark:border-[#425047]"><p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[.18em] text-[#99948a]">Categories</p><div className="space-y-1"><Link to="/" onClick={onClose} className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm hover:bg-[#f6eee6]"><Layers size={16}/>All Categories</Link>{categories.map(category=><Link key={category} to={`/?category=${encodeURIComponent(category)}`} onClick={onClose} className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-[#706f66] hover:bg-[#f6eee6] dark:text-[#d5d5ca]"><BookOpen size={15}/>{category}</Link>)}</div></div>
 <div className="mt-auto pt-7"><div className="flex rounded-xl border border-[#e7e0d6] bg-[#faf7f1] p-1 dark:border-[#45584a] dark:bg-[#2d3b31]"><button onClick={()=>dark&&toggleTheme()} className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-xs font-bold ${!dark?'bg-white shadow-sm dark:text-ink':''}`}><Sun size={15}/>Light</button><button onClick={()=>!dark&&toggleTheme()} className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-xs font-bold ${dark?'bg-[#4a5e4d] text-white':''}`}><Moon size={15}/>Dark</button></div><p className="mt-5 text-center text-xs text-[#aaa397]">A little space for big ideas.</p></div>
 </aside></>;
}
