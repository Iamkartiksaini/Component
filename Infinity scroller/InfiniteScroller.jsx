import React, { useState, useRef, useEffect } from 'react';

function InfiniteScroller() {
  const x = Array.from({ length: 20 }, (_, i) => i + 1);
  const [items, setItems] = useState(x);
  const observer = useRef(null);
  const lastItemRef = useRef(null);

  const fetchMoreContent = () => {
    const newItems = Array.from({ length: 5 }, (_, i) => items.length + i + 1);
    setItems(prevItems => [...prevItems, ...newItems]);
  };

  const intersectionCallback = (entries,) => {
    const lastEntry = entries[entries.length - 1];
    if (lastEntry.isIntersecting && items.length < 30) {
      fetchMoreContent();
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(intersectionCallback, {
      threshold: 0.5 // Trigger when at least 50% of the target is visible
    });

    if (lastItemRef.current) {
      observer.current.observe(lastItemRef.current);
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [items]);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="item" ref={index === items.length - 1 ? lastItemRef : null}>
          Item {item}
        </div>
      ))}
    </div>
  );
}

export default InfiniteScroller;
