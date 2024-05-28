import React, {useEffect} from "react";
const DiscoverSection = () => {
  const addAnimation = (scrollers) => {
    scrollers.forEach((scroller) => {
      scroller.setAttribute('data-animated', true);

      const innerScroller = scroller.querySelector('.scroller_inner');
      const scrollerContent = Array.from(innerScroller.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', true);
        
        
      });
    });
  };

  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);


  return (
    <section className="discover mb-10">
      <h1 className="mx-4 mb-10 dark:text-white lg:text-2xl">Discover New Assets</h1>
      <div className="flex dark:text-white text-black">
        <div className="scroller" animation-duration="slow" data-direction="left">
          <div className="tag-list scroller_inner w-full">
            <p className="gradient-border">Photography</p>
            <p className="gradient-border">Stickers</p>
            <p className="gradient-border">Illustrations</p>
            <p className="gradient-border">Graphics</p>
            <p className="gradient-border">Icons</p>
            <p className="gradient-border">Logos</p>
            <p className="gradient-border">Animations</p>
            <p className="gradient-border">Photography</p>
            <p className="gradient-border">Stickers</p>
            <p className="gradient-border">Illustrations</p>
            <p className="gradient-border">Graphics</p>
            <p className="gradient-border">Icons</p>
            <p className="gradient-border">Logos</p>
            <p className="gradient-border">Animations</p>
          </div>
        </div>
      </div>
      <div className="flex  dark:text-white text-black">
        <div className="scroller" animation-duration="slow" data-direction="right">
          <div className="tag-list scroller_inner w-full">
            <p className="gradient-border">Music tracks</p>
            <p className="gradient-border">Sound effects</p>
            <p className="gradient-border">Litecoin</p>
            <p className="gradient-border">Utility tokens</p>
            <p className="gradient-border">NFTs</p>
            <p className="gradient-border">3D models</p>
            <p className="gradient-border">Digital sculptures</p>
            <p className="gradient-border">Music tracks</p>
            <p className="gradient-border">Sound effects</p>
            <p className="gradient-border">Litecoin</p>
            <p className="gradient-border">Utility tokens</p>
            <p className="gradient-border">NFTs</p>
            <p className="gradient-border">3D models</p>
            <p className="gradient-border">Digital sculptures</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
