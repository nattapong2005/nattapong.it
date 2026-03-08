import { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <div
      id="contact"
      className="slide-up col-span-1 md:col-span-3 lg:col-span-4 mt-20 mb-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            ติดต่อผม <br />
            <span className="text-primary">Contact Me</span>
          </h2>
          <p className="text-slate-400 mb-8 max-w-md">
            สนใจร่วมงานหรือสอบถามข้อมูลเพิ่มเติม
            สามารถส่งข้อความมาหาผมได้โดยตรง หรือผ่านช่องทางโซเชียลมีเดียครับ
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                <i className="fas fa-envelope text-primary"></i>
              </div>
              azzzx30089@gmail.com
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                <i className="fab fa-github text-primary"></i>
              </div>
              nattapong2005
            </div>
          </div>
        </div>
        <div className="bento-card p-8 border border-white/10 relative overflow-hidden">
          {formState === 'success' ? (
            <div className="absolute inset-0 bg-dark/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 z-20 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-4xl mb-6 border border-green-500/30">
                <i className="fas fa-check"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">ส่งข้อความสำเร็จ!</h3>
              <p className="text-slate-400">ขอบคุณสำหรับข้อความครับ ผมจะรีบติดต่อกลับโดยเร็วที่สุด</p>
              <button
                onClick={() => setFormState('idle')}
                className="mt-8 text-primary text-sm font-bold hover:underline"
              >
                ส่งข้อความอื่น
              </button>
            </div>
          ) : null}

          <form className={`space-y-4 transition-opacity duration-300 ${formState === 'sending' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`} onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="ชื่อของคุณ"
                  className="w-full bg-surface border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-primary/50 outline-none transition"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full bg-surface border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-primary/50 outline-none transition"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Message
              </label>
              <textarea
                required
                placeholder="ส่งข้อความถึงผม..."
                rows={4}
                className="w-full bg-surface border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-primary/50 outline-none transition resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={formState === 'sending'}
              className="w-full py-4 bg-primary hover:bg-purple-600 text-white font-bold rounded-xl transition shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 group disabled:bg-slate-700 disabled:shadow-none"
            >
              {formState === 'sending' ? (
                <>กำลังส่ง... <i className="fas fa-spinner fa-spin text-xs"></i></>
              ) : (
                <>ส่งข้อความ <i className="fas fa-paper-plane text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
