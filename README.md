# โครงการ Portfolio (Portfolio Project)

นี่คือโปรเจกต์เว็บไซต์ Portfolio ส่วนตัวที่พัฒนาด้วย [Next.js](https://nextjs.org/) ซึ่งสร้างขึ้นโดยใช้ [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)

## คุณสมบัติหลัก (Features)

โปรเจกต์นี้ประกอบด้วยส่วนประกอบต่างๆ ที่จำเป็นสำหรับ Portfolio:
- **Hero Section**: ส่วนแนะนำตัวที่โดดเด่น
- **Projects**: แสดงผลงานและโปรเจกต์ที่เคยทำ
- **Skills & Tech Stack**: รายการทักษะทางเทคนิคและเทคโนโลยีที่เชี่ยวชาญ
- **Experience & Education**: ประวัติการทำงานและการศึกษา
- **Certifications & Activities**: ใบเซอร์ติฟิเกตและกิจกรรมต่างๆ
- **Contact**: แบบฟอร์มหรือข้อมูลการติดต่อ
- **Visual Enhancements**: มีการใช้ Ambient Glow และ Particle Background เพื่อความสวยงาม

## เทคโนโลยีที่ใช้ (Tech Stack)

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: พัฒนาขึ้นเอง (Custom Components)

## เริ่มต้นใช้งาน (Getting Started)

ก่อนอื่นให้ติดตั้ง dependencies:

```bash
npm install
```

จากนั้น รันเซิร์ฟเวอร์สำหรับการพัฒนา (development server):

```bash
npm run dev
# หรือ
yarn dev
# หรือ
pnpm dev
# หรือ
bun dev
```

เปิด [http://localhost:3000](http://localhost:3000) ด้วยเบราว์เซอร์ของคุณเพื่อดูผลลัพธ์

## การปรับแต่ง (Customization)

คุณสามารถเริ่มแก้ไขหน้าหลักได้โดยการปรับปรุงไฟล์ใน `src/app/page.tsx` และส่วนประกอบต่างๆ ในโฟลเดอร์ `src/components/`

## การสร้างโปรเจกต์สำหรับ Production (Build)

สำหรับการสร้างโปรเจกต์เพื่อนำไปใช้งานจริง:

```bash
npm run build
```

และใช้คำสั่งนี้เพื่อเริ่มเซิร์ฟเวอร์:

```bash
npm run start
```

---
สร้างขึ้นด้วย ❤️ โดยใช้ Next.js
