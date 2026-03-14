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
           เหรียญทอง
          </div>
          <h4 className="text-lg font-bold text-white mb-1">
            การแข่งขันทักษะเทคโนโลยีเครือข่ายระดับชาติ
          </h4>
          <p className="text-slate-400 text-sm">
            รางวัลรองชนะเลิศอันดับ 3 การแข่งขันทักษะวิชาชีพ ทักษะเทคโนโลยีเครือข่าย ประจำปีการศึกษา 2567 ณ วิทยาลัยเทคนิคตรัง
          </p>
        </div>

        {/* Timeline Item 2 */}
        <div className="relative pl-6">
          <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-yellow-500 ring-4 ring-dark"></div>
          <div className="text-xs text-secondary font-bold mb-1">
           เหรียญเงิน
          </div>
          <h4 className="text-lg font-bold text-white mb-1">
            การแข่งขันทักษะเทคโนโลยีเครือข่ายระดับภาคกลาง
          </h4>
          <p className="text-slate-400 text-sm">
            รางวัลรองชนะเลิศอันดับ 1 การแข่งขันทักษะวิชาชีพ ทักษะเทคโนโลยีเครือข่าย ประจำปีการศึกษา 2567 ณ วิทยาลัยเทคนิคพระนครศรีอยุธยา
          </p>
        </div>

        {/* Timeline Item 3 */}
        <div className="relative pl-6">
          <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-yellow-500 ring-4 ring-dark"></div>
          <div className="text-xs text-gray-500 font-bold mb-1">
           เหรียญเงิน
          </div>
          <h4 className="text-lg font-bold text-white mb-1">
            การแข่งขันทักษะเทคโนโลยีเครือข่ายระดับภาคกลาง
          </h4>
          <p className="text-slate-400 text-sm">
            รางวัลรองชนะเลิศอันดับ 2 การแข่งขันทักษะวิชาชีพ ทักษะเทคโนโลยีเครือข่าย ประจำปีการศึกษา 2567 ณ วิทยาลัยเทคนิคสุพรรณบุรี
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
