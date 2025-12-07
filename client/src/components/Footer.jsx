const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-gray-500 flex justify-between">
        <span>© {new Date().getFullYear()} ZapShift Courier</span>
        <span>Built with React & Tailwind</span>
      </div>
    </footer>
  )
}

export default Footer
