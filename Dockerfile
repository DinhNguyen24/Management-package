# Sử dụng image Node.js chính thức
FROM node:16

# Thiết lập thư mục làm việc
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép mã nguồn vào image
COPY . .

# Biên dịch TypeScript sang JavaScript
RUN npm run build

# Mở cổng cho ứng dụng
EXPOSE 3000

# Lệnh khởi động ứng dụng
CMD ["npm", "run", "start:prod"]
