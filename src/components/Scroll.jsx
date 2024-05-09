
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';

const Scroll = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = Array.from(
        document.querySelectorAll('section')
      ).map((section) => ({
        id: section.id,
        offset: section.offsetTop,
        title: section.getAttribute('data-title'),
      }));

      const scrollPosition = window.scrollY + 100; // Add a buffer to the scroll position for better UX

      for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (
          scrollPosition >= sectionOffsets[i].offset &&
          (!sectionOffsets[i + 1] ||
            scrollPosition < sectionOffsets[i + 1].offset)
        ) {
          setActiveSection(sectionOffsets[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <NavBar
            sections={[
              { id: 'section1', title: 'Section 1' },
              { id: 'section2', title: 'Section 2' },
              // Add more sections as needed
            ]}
            activeSection={activeSection}
          />
        </div>
        <div className="col-md-9">
          <main>
            <section id="section1" data-title="Section 1">
              Section 1 Content
            </section>
            <section id="section2" data-title="Section 2">
              Section 2 Content
            </section>
            {/* Add more sections as needed */}
          </main>
        </div>
      </div>
    </div>
  );
};


export default Scroll;
