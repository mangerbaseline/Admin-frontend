import './globals.css';
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: 'Your App',
  description: 'With Dark Mode',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
