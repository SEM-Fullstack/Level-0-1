## 🎯 Capstone Product: **Mood Journal – Nhật Ký Cảm Xúc Một Dòng**

### 🧠 **Ý tưởng tổng quát**

Một web app **cực đơn giản** giúp người dùng ghi lại **1 dòng cảm xúc mỗi ngày** kèm theo một **emoji mood**.
Người dùng có thể:

- Ghi nhanh cảm xúc trong ngày (như nhật ký siêu ngắn)
- Chọn mood bằng emoji (😃 😐 😢 😡 🥳)
- Xem lại lịch sử cảm xúc theo ngày

---

## 🛠️ **Tính năng (Feature Requirements)**

1. **Trang chính – Xem danh sách cảm xúc**

    - Hiển thị các **dòng cảm xúc** đã lưu theo thứ tự mới nhất đến cũ nhất
    - Hiển thị **ngày**, **emoji mood**, và **text**

2. **Trang thêm cảm xúc – Add Mood**

    - Form nhập 1 dòng cảm xúc
    - Chọn một emoji mood
    - Bấm Submit để lưu

3. **API Backend (trong Next.js hoặc NodeJS Express)**

    - `GET /api/moods`: Trả về danh sách mood đã lưu (in-memory)
    - `POST /api/moods`: Nhận dữ liệu mới để thêm vào danh sách

---

## 📦 **Cấu trúc dữ liệu (TypeScript Types)**

```ts
// types/mood.ts
export type Mood = 'happy' | 'neutral' | 'sad' | 'angry' | 'excited';

export interface MoodEntry {
    id: string; // Unique ID
    text: string; // Cảm xúc mô tả
    mood: Mood; // Loại mood
    date: string; // ISO Date
}
```

---

## 📂 **Cấu trúc thư mục đề xuất – Next.js App Router**

```
/mood-journal/
├── app/
│   ├── page.tsx                // Trang chính - danh sách mood
│   ├── add/page.tsx            // Trang thêm mood mới
│   └── api/
│       └── moods/
│           ├── route.ts        // GET + POST API
├── components/
│   ├── MoodForm.tsx            // Form nhập mood
│   └── MoodList.tsx            // Danh sách mood
├── types/
│   └── mood.ts                 // Định nghĩa kiểu dữ liệu
├── lib/
│   └── data.ts                 // Biến lưu data in-memory
├── README.md
├── package.json
└── tsconfig.json
```

---

## 🧑‍💻 **Flow sử dụng**

1. Truy cập trang `/add` để ghi một cảm xúc mới
2. Nhập mô tả + chọn emoji
3. Bấm Submit, app gọi `POST /api/moods`
4. Quay về trang `/` để xem lịch sử các mood

---

## ✅ **Checklist Deliverables**

- [ ] App chạy được bằng Next.js với TypeScript
- [ ] Tối thiểu 2 trang `/` và `/add`
- [ ] API `/api/moods` hỗ trợ `GET` và `POST`
- [ ] Dùng kiểu TypeScript chuẩn cho MoodEntry
- [ ] Dữ liệu được hiển thị đúng thứ tự
- [ ] Có thể nhập nhiều mood khác nhau
- [ ] Code được push lên GitHub kèm README hướng dẫn
