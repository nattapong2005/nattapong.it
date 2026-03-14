"use client";
import { useState, useRef, useEffect } from "react";

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const dragged = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId: number;
    // ปรับความเร็วการเลื่อนอัตโนมัติที่นี่ (px/frame)
    const autoScrollSpeed = 0.5;

    const play = () => {
      // เลื่อนเมื่อไม่ได้ชี้เมาส์และไม่ได้กำลังลาก
      if (!isHovered && !isDragging) {
        slider.scrollLeft += autoScrollSpeed;
        
        // วนลูปเมื่อเลื่อนไปถึงชุดที่ 2 (ครึ่งความกว้างรวม)
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft -= slider.scrollWidth / 2;
        }
      }
      animationId = requestAnimationFrame(play);
    };

    animationId = requestAnimationFrame(play);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragged.current = false;
    if (!sliderRef.current) return;
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    dragged.current = true; // ยืนยันว่ามีการลากเกิดขึ้น
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // ความเร็วเมื่อใช้เมาส์ลาก
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    // รองรับการทัชแพด หรือเลื่อน scrollbar ด้วยตัวเอง
    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft -= slider.scrollWidth / 2;
    } else if (slider.scrollLeft <= 0) {
      slider.scrollLeft += slider.scrollWidth / 2;
    }
  };

  const handleCardClick = (image: string) => {
    if (dragged.current) return; // หากเป็นการลาก ให้ไม่ต้องเปิด Popup
    setSelectedImage(image);
  };
  const certs = [
    {
      id: 1,
      title: "รองชนะเลิศอันดับ 3 (ระดับชาติ)",
      issuer: "มาตรฐานเหรียญเงิน",
      date: "2567",
      description: "การแข่งขันทักษะวิชาชีพ ทักษะเทคโนโลยีเครือข่าย ประจำปีการศึกษา 2567",
      image: "/img/certificates/1.png",
    },
    {
      id: 2,
      title: "รองชนะเลิศอันดับ 3 (ระดับภาคกลาง)",
      issuer: "มาตรฐานเหรียญทอง",
      date: "2566",
      description: "การแข่งขันทักษะวิชาชีพ ทักษะการเขียนโปรแกรมคอมพิวเตอร์ ประจำปีการศึกษา 2566",
      image: "/img/certificates/2.jpg",
    },
    {
      id: 3,
      title: "รองชนะเลิศอันดับ 2 (ระดับภาคกลาง)",
      issuer: "มาตรฐานเหรียญทอง",
      date: "2568",
      description: "การแข่งขันทักษะวิชาชีพ ทักษะเทคโนโลยีเครือข่าย ประจำปีการศึกษา 2568",
      image: "/img/certificates/3.jpg",
    },
    {
      id: 4,
      title: "รองชนะเลิศอันดับ 3 (ระดับภาคกลาง)",
      issuer: "มาตรฐานเหรียญเงิน",
      date: "2565",
      description: "การแข่งขันทักษะวิชาชีพ ทักษะการเขียนโปรแกรมคอมพิวเตอร์ ประจำปีการศึกษา 2565",
      image: "/img/certificates/4.jpg",
    },
    {
      id: 5,
      title: "รองชนะเลิศอันดับ 1 (ระดับภาคกลาง)",
      issuer: "มาตรฐานเหรียญทอง",
      date: "2567",
      description: "การแข่งขันทักษะวิชาชีพ ทักษะเทคโนโลยีเครือข่าย ประจำปีการศึกษา 2567",
      image: "/img/certificates/5.jpg",
    },
    {
      id: 6,
      title: "อบรมโครงการพัฒนาทักษะวิชาชีพขั้นสูง",
      issuer: "การพัฒนาระบบสมองกลฝังตัว",
      date: "2567",
      description: "อบรมโครงการพัฒนาทักษะวิชาชีพขั้นสูงพร้อมสร้างนวัตกรรมด้านอิเล็กทรอนิกส์ปัญญาประดิษฐ์และข้อมูล หัวข้อ การพัฒนาระบบสมองกลฝังตัว",
      image: "/img/certificates/6.jpg",
    },
    {
      id: 7,
      title: "อบรมโครงการพัฒนาทักษะวิชาชีพขั้นสูง",
      issuer: "การพัฒนาระบบอินเทอร์เน็ตในทุกสิ่ง",
      date: "2567",
      description: "อบรมโครงการพัฒนาทักษะวิชาชีพขั้นสูงพร้อมสร้างนวัตกรรมด้านอิเล็กทรอนิกส์ปัญญาประดิษฐ์และข้อมูล หัวข้อ การพัฒนาระบบอินเทอร์เน็ตในทุกสิ่ง",
      image: "/img/certificates/7.jpg",
    },
    {
      id: 8,
      title: "อบรบเกี่ยวกับระบบเครือข่าย",
      issuer: "Cisco Networking Academy",
      date: "2568",
      description: "อบรบเกี่ยวกับระบบเครือข่าย Cisco Networking Academy",
      image: "/img/certificates/8.jpg",
    },
  ];

  return (
    <div className="bento-card slide-up col-span-1 md:col-span-3 lg:col-span-4 p-10 bg-transparent/20 relative">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 border border-white/10">
            <i className="fas fa-certificate text-sm"></i>
          </div>
          <h3 className="text-lg font-medium text-white">Certifications</h3>
        </div>
      </div>

      {/* CSS สำหรับปรับแต่ง Scrollbar */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .mask-gradient {
          /* เบลอขอบซ้ายขวาให้ดูเนียนตา */
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}} />

      {/* 
        คอนเทนเนอร์หลัก 
        group/slider เพื่อคุมการ hover
        mask-gradient สำหรับเบลอขอบ
      */}
      <div 
        className="group/slider mask-gradient pb-4 relative w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          ref={sliderRef}
          className={`flex overflow-x-auto hide-scrollbar w-full ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onScroll={handleScroll}
        >
          {/* ชุดที่ 1 */}
          <div className="flex w-max gap-6 pr-6">
            {certs.map((cert) => (
              <div
                key={`set1-${cert.id}`}
                className="w-[280px] md:w-[340px] shrink-0 group/card p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-all flex flex-col"
                onClick={() => handleCardClick(cert.image)}
              >
                <div className="w-full h-48 rounded-xl bg-black/20 mb-6 overflow-hidden relative border border-white/5">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 opacity-80 group-hover/card:opacity-100 pointer-events-none"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <h4 className="text-base font-bold text-slate-200 mb-2 group-hover/card:text-white transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-relaxed mb-4">
                    {cert.issuer} • {cert.date}
                  </p>
                  <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ชุดที่ 2 (ทำสำเนาเพื่อต่อกันให้ชิดเนียนเป็นลูป) */}
          <div className="flex w-max gap-6 pr-6" aria-hidden="true">
            {certs.map((cert) => (
              <div
                key={`set2-${cert.id}`}
                className="w-[280px] md:w-[340px] shrink-0 group/card p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-all flex flex-col"
                onClick={() => handleCardClick(cert.image)}
              >
                <div className="w-full h-48 rounded-xl bg-black/20 mb-6 overflow-hidden relative border border-white/5">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 opacity-80 group-hover/card:opacity-100 pointer-events-none"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <h4 className="text-base font-bold text-slate-200 mb-2 group-hover/card:text-white transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-relaxed mb-4">
                    {cert.issuer} • {cert.date}
                  </p>
                  <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Modal สำหรับแสดงรูปภาพขยาย */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-full flex items-center justify-center">
            <button 
              className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
            <img 
              src={selectedImage} 
              alt="Certificate" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
