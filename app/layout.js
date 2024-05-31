import "./globals.css";
import { App } from "./app";
export const metadata = {
  title: "Diverse",
};
export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <App>{children}</App>
      </body>
      
    </html>
  );
}

