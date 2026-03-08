"use client";

const Activities = () => {
  return (
    <div
      id="activities"
      className="bento-card slide-up col-span-1 lg:col-span-2 row-span-2 p-8"
    >
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <i className="fas fa-trophy text-yellow-500"></i> Activities & Experiences
      </h3>

      <div className="relative border-l border-surfaceHover ml-3 space-y-6">
        {/* Timeline Item 1 */}
        <div className="relative pl-6">
          <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-yellow-500 ring-4 ring-dark"></div>
          <div className="text-xs text-yellow-500 font-bold mb-1">
            ปีการศึกษา 2566 (Mockup)
          </div>
          <h4 className="text-lg font-bold text-white mb-1">
            เหรียญทอง การแข่งขันทักษะการเขียนโปรแกรมระดับชาติ
          </h4>
          <p className="text-slate-400 text-sm">
            การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์และอัลกอริทึม จัดโดยสถาบันอาชีวศึกษา
            แสดงถึงความสามารถในการแก้ปัญหา (Problem Solving)
            ภายใต้เวลาที่จำกัด
          </p>
        </div>

        {/* Timeline Item 2 */}
        <div className="relative pl-6">
          <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-dark"></div>
          <div className="text-xs text-primary font-bold mb-1">
            ปีการศึกษา 2565 (Mockup)
          </div>
          <h4 className="text-lg font-bold text-white mb-1">
            หัวหน้าทีมพัฒนาเว็บไซต์ / ชมรม IT ของสถาบัน
          </h4>
          <p className="text-slate-400 text-sm">
            เป็นตัวหลักในการพัฒนา Web Application ของชมรม และสอนพื้นฐานการเขียนเว็บ
            (HTML/CSS) ให้กับนักเรียนรุ่นน้อง
          </p>
        </div>

        {/* Timeline Item 3 */}
        <div className="relative pl-6">
          <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-secondary ring-4 ring-dark"></div>
          <div className="text-xs text-secondary font-bold mb-1">
            ปีการศึกษา 2565 (Mockup)
          </div>
          <h4 className="text-lg font-bold text-white mb-1">
            เข้าร่วมอบรมค่าย AI & Data Science Introduction
          </h4>
          <p className="text-slate-400 text-sm">
            ค่ายวิชาการเพื่อทำความเข้าใจหลักการทำงานของ Artificial Intelligence
            และการประมวลผลข้อมูลขนาดใหญ่
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
