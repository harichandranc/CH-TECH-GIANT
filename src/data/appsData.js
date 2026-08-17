const apps = [
  {
    id: 1,
    title: {
      en: "World Clock",
      zh: "世界时钟",
      es: "Reloj mundial",
      pt: "Relógio mundial",
      de: "Weltzeituhr",
      ko: "세계 시계",
    },
    category: "Utilities",
    description: {
      en: "View the current time across multiple countries and cities with a beautiful and easy-to-use interface.",
      zh: "通过美观且易于使用的界面查看多个国家和城市的当前时间。",
      es: "Consulta la hora actual de varios países y ciudades con una interfaz atractiva y fácil de usar.",
      pt: "Veja a hora atual de vários países e cidades com uma interface bonita e fácil de usar.",
      de: "Sehen Sie die aktuelle Uhrzeit in verschiedenen Ländern und Städten mit einer schönen und benutzerfreundlichen Oberfläche.",
      ko: "아름답고 사용하기 쉬운 인터페이스로 여러 국가와 도시의 현재 시간을 확인하세요.",
    },
    image: "/projects/worldclock.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.chtechgiant.worldclock",
    apk: "http://147.93.110.58:8080/WorldClock.apk",
  },

  {
    id: 2,
    title: {
      en: "File Converter",
      zh: "文件转换器",
      es: "Convertidor de archivos",
      pt: "Conversor de arquivos",
      de: "Dateikonverter",
      ko: "파일 변환기",
    },
    category: "Utilities",
    description: {
      en: "Convert images, videos, audio, documents, archives, and many more file formats from one app.",
      zh: "在一个应用中转换图片、视频、音频、文档、压缩包及多种文件格式。",
      es: "Convierte imágenes, vídeos, audio, documentos, archivos comprimidos y muchos otros formatos desde una sola aplicación.",
      pt: "Converta imagens, vídeos, áudios, documentos, arquivos compactados e muitos outros formatos em um único aplicativo.",
      de: "Konvertieren Sie Bilder, Videos, Audiodateien, Dokumente, Archive und viele weitere Dateiformate in einer einzigen App.",
      ko: "하나의 앱에서 이미지, 동영상, 오디오, 문서, 압축 파일 및 다양한 파일 형식을 변환하세요.",
    },
    image: "/projects/fileconverter.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.chtechgiant.everything_converter",
    apk: "http://147.93.110.58:8080/FileConverter.apk",
  },

  {
    id: 3,
    title: {
      en: "Bulk File Renamer",
      zh: "批量文件重命名",
      es: "Renombrador masivo de archivos",
      pt: "Renomeador de arquivos em massa",
      de: "Massen-Dateiumbenenner",
      ko: "대량 파일 이름 변경",
    },
    category: "Productivity",
    description: {
      en: "Rename thousands of files instantly using prefixes, suffixes, numbering, replacement rules, and more.",
      zh: "使用前缀、后缀、编号、替换规则等功能快速批量重命名数千个文件。",
      es: "Renombra miles de archivos al instante utilizando prefijos, sufijos, numeración, reglas de reemplazo y mucho más.",
      pt: "Renomeie milhares de arquivos instantaneamente usando prefixos, sufixos, numeração, regras de substituição e muito mais.",
      de: "Benennen Sie Tausende von Dateien sofort mit Präfixen, Suffixen, Nummerierungen, Ersetzungsregeln und vielem mehr um.",
      ko: "접두사, 접미사, 번호 지정, 교체 규칙 등을 사용하여 수천 개의 파일 이름을 빠르게 변경하세요.",
    },
    image: "/projects/filerenamer.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.chtechgiant.file_name_cleaner",
    apk: "http://147.93.110.58:8080/BulkFileRenamer.apk",
  },

  {
    id: 4,
    title: {
      en: "Web Codshop",
      zh: "Web Codshop",
      es: "Web Codshop",
      pt: "Web Codshop",
      de: "Web Codshop",
      ko: "Web Codshop",
    },
    category: "Education",
    description: {
      en: "Marketplace dedicated to website source code, web templates, and professional web development resources.",
      zh: "专注于网站源码、网页模板和专业 Web 开发资源的市场平台。",
      es: "Marketplace dedicado a códigos fuente de sitios web, plantillas web y recursos profesionales para el desarrollo web.",
      pt: "Marketplace dedicado a códigos-fonte de sites, templates web e recursos profissionais para desenvolvimento web.",
      de: "Marktplatz für Website-Quellcode, Webvorlagen und professionelle Ressourcen für die Webentwicklung.",
      ko: "웹사이트 소스 코드, 웹 템플릿 및 전문 웹 개발 리소스를 제공하는 마켓플레이스입니다.",
    },
    image: "/projects/webcodshop.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.chtechgiant.webcodshop",
    apk: null,
  },

  {
    id: 5,
    title: {
      en: "Invoice Maker",
      zh: "发票制作器",
      es: "Creador de facturas",
      pt: "Criador de faturas",
      de: "Rechnungsersteller",
      ko: "청구서 제작기",
    },
    category: "Business",
    description: {
      en: "Generate professional invoices, quotations, and receipts with PDF export and sharing.",
      zh: "创建专业发票、报价单和收据，并支持导出 PDF 和分享。",
      es: "Crea facturas, presupuestos y recibos profesionales con opciones para exportar y compartir en PDF.",
      pt: "Crie faturas, orçamentos e recibos profissionais com opções de exportação e compartilhamento.",
      de: "Erstellen Sie professionelle Rechnungen, Angebote und Quittungen mit PDF-Export und Freigabefunktionen.",
      ko: "PDF 내보내기 및 공유 기능을 사용하여 전문적인 청구서, 견적서 및 영수증을 만들어 보세요.",
    },
    image: "/projects/invoicemaker.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.chtechgiant.invoice_generator",
    apk: "http://147.93.110.58:8080/InvoiceMaker.apk",
  },

  {
    id: 6,
    title: {
      en: "CGPA & SGPA Calculator",
      zh: "CGPA 和 SGPA 计算器",
      es: "Calculadora de CGPA y SGPA",
      pt: "Calculadora de CGPA e SGPA",
      de: "CGPA- & SGPA-Rechner",
      ko: "CGPA 및 SGPA 계산기",
    },
    category: "Education",
    description: {
      en: "Calculate semester SGPA and overall CGPA accurately with support for multiple grading systems.",
      zh: "支持多种评分制度，准确计算学期 SGPA 和总 CGPA。",
      es: "Calcula con precisión el SGPA del semestre y el CGPA general con compatibilidad para varios sistemas de calificación.",
      pt: "Calcule com precisão o SGPA do semestre e o CGPA geral com suporte para vários sistemas de avaliação.",
      de: "Berechnen Sie den SGPA eines Semesters und den Gesamt-CGPA präzise mit Unterstützung für verschiedene Bewertungssysteme.",
      ko: "다양한 성적 평가 시스템을 지원하여 학기 SGPA와 전체 CGPA를 정확하게 계산하세요.",
    },
    image: "/projects/cgpacalculator.jpg",
    playStore:
      "https://play.google.com/store/apps/details?id=com.chtechgiant.ch_cgpa_sgpa_calculator",
    apk: "http://147.93.110.58:8080/CGPASGPACalculator.apk",
  },

  {
    id: 7,
    title: {
      en: "Image Compressor",
      zh: "图片压缩器",
      es: "Compresor de imágenes",
      pt: "Compressor de imagens",
      de: "Bildkompressor",
      ko: "이미지 압축기",
    },
    category: "Photography",
    description: {
      en: "Compress images to your desired file size while maintaining excellent quality.",
      zh: "在保持高质量的同时，将图片压缩到所需文件大小。",
      es: "Comprime imágenes al tamaño de archivo deseado manteniendo una excelente calidad.",
      pt: "Comprima imagens para o tamanho de arquivo desejado mantendo uma excelente qualidade.",
      de: "Komprimieren Sie Bilder auf die gewünschte Dateigröße und behalten Sie dabei eine hervorragende Qualität bei.",
      ko: "뛰어난 이미지 품질을 유지하면서 원하는 파일 크기로 이미지를 압축하세요.",
    },
    image: "/projects/image-compressor.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.chtechgiant.imagecompressor",
    apk: null,
  },

  {
    id: 8,
    title: {
      en: "Image to PDF Converter",
      zh: "图片转 PDF",
      es: "Convertidor de imagen a PDF",
      pt: "Conversor de imagem para PDF",
      de: "Bild-zu-PDF-Konverter",
      ko: "이미지 PDF 변환기",
    },
    category: "Productivity",
    description: {
      en: "Convert any image format to PDF.",
      zh: "将任何图片格式快速转换为 PDF 文件。",
      es: "Convierte cualquier formato de imagen a un archivo PDF de forma rápida y sencilla.",
      pt: "Converta qualquer formato de imagem para um arquivo PDF de forma rápida e fácil.",
      de: "Konvertieren Sie jedes Bildformat schnell und einfach in eine PDF-Datei.",
      ko: "모든 이미지 형식을 빠르고 간편하게 PDF 파일로 변환하세요.",
    },
    image: "/projects/img2pdf copy.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.chtechgiant.image_to_pdf_converter",
    apk: "http://147.93.110.58:8080/ImageToPDFConverter.apk",
  },

  {
    id: 9,
    title: {
      en: "PDF Lock Unlock",
      zh: "PDF 加密与解密",
      es: "Bloquear y desbloquear PDF",
      pt: "Bloquear e desbloquear PDF",
      de: "PDF sperren und entsperren",
      ko: "PDF 잠금 및 잠금 해제",
    },
    category: "Utilities",
    description: {
      en: "Lock and unlock PDF files with a password.",
      zh: "使用密码对 PDF 文件进行加密和解密。",
      es: "Protege y desbloquea archivos PDF mediante una contraseña.",
      pt: "Proteja e desbloqueie arquivos PDF usando uma senha.",
      de: "Sperren und entsperren Sie PDF-Dateien mit einem Passwort.",
      ko: "비밀번호를 사용하여 PDF 파일을 잠그거나 잠금을 해제하세요.",
    },
    image: "/projects/pdf_lock_unlock.jpeg",
    playStore:
      "https://play.google.com/store/apps/details?id=com.chtechgiant.pdf_lock_unlock",
    apk: "http://147.93.110.58:8080/PDFLockUnlock.apk",
  },
];

export default apps;