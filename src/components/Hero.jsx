import { ArrowUpRight, Plus, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-[26px] bg-[#f7ede1] px-7 py-12 dark:bg-[#354438] sm:px-12 sm:py-16 lg:min-h-[345px] lg:px-14">
      <div className="absolute -bottom-28 right-24 h-60 w-80 rounded-full bg-[#f8d7c0]/80 blur-sm" />
      <div className="absolute -right-16 -top-20 h-56 w-80 rotate-[-35deg] rounded-[100px] bg-white/50" />
      <div className="relative z-10 max-w-md">
        <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.25em] text-[#a87c5f]">
          <Leaf size={16} />
          Welcome to Inkspire
        </div>
        <h1 className="font-serif text-[46px] font-semibold leading-[1.12] tracking-tight sm:text-[62px]">
          Ideas.
          <br />
          Stories.
          <br />
          <span className="italic text-[#a96750]">Perspectives.</span>
        </h1>
        <p className="mt-5 max-w-[290px] text-sm leading-7 text-[#6c7168] dark:text-[#e5e4da]">
          A space to share, explore and grow through meaningful stories.
        </p>
        <Link to="/create" className="primary-btn mt-7">
          <Plus size={17} />
          Write a New Post <ArrowUpRight size={15} />
        </Link>
      </div>
      <div className="pointer-events-none absolute bottom-[-35px] right-[-15px] hidden h-[320px] w-[47%] items-center justify-center lg:flex">
        <div className="relative h-[290px] w-[340px] overflow-hidden rounded-[47%_53%_38%_62%/42%_37%_63%_58%] shadow-xl">
          <img
            src="/images/hero.jpg"
            alt="Warm creative writing desk"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute -right-2 top-7 rotate-[-9deg] font-serif text-2xl italic leading-snug text-[#a56750]">
          Good
          <br />
          Ideas
          <br />
          Grow
          <br />
          Here.
        </div>
      </div>
    </section>
  );
}
