import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-8 mt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/sahityamandapati"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/sahityamandapati"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:sahityamandapati@gmail.com"
            className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
          >
            <Mail size={20} />
          </a>
        </div>
        <p className="text-slate-600">© {new Date().getFullYear()} Sahitya Mandapati. All rights reserved.</p>
        <p className="text-slate-500 text-sm mt-2">Data Engineer | Python | AWS | Cloud Solutions</p>
      </div>
    </footer>
  )
}
