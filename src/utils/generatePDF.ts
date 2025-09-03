import html2pdf from 'html2pdf.js'
import toast from 'react-hot-toast'

export const generateResumePDF = async () => {
  try {
    // Get the main content area (excluding header, footer, and navigation)
    const element = document.getElementById('resume-content')
    
    if (!element) {
      console.error('Resume content element not found')
      return
    }

    // Configure PDF options
    const opt = {
      margin: 0.5,
      filename: 'Jose_Vinueza_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        letterRendering: true,
        allowTaint: true
      },
      jsPDF: { 
        unit: 'in', 
        format: 'letter', 
        orientation: 'portrait' 
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    }

    // Generate and download the PDF
    await html2pdf().set(opt).from(element).save()
    
    toast.success('Resume PDF generated successfully!')
    console.log('PDF generated successfully')
  } catch (error) {
    console.error('Error generating PDF:', error)
    toast.error('Error generating PDF. Please try again.')
  }
}

export const generateFullSitePDF = async () => {
  try {
    // Get the entire page content
    const element = document.body
    
    // Configure PDF options for full site
    const opt = {
      margin: 0.3,
      filename: 'Jose_Vinueza_Portfolio.pdf',
      image: { type: 'jpeg', quality: 0.95 },
      html2canvas: { 
        scale: 1.5,
        useCORS: true,
        letterRendering: true,
        allowTaint: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: 1200,
        windowHeight: 800
      },
      jsPDF: { 
        unit: 'in', 
        format: 'letter', 
        orientation: 'portrait' 
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    }

    // Generate and download the PDF
    await html2pdf().set(opt).from(element).save()
    
    toast.success('Portfolio PDF generated successfully!')
    console.log('Full site PDF generated successfully')
  } catch (error) {
    console.error('Error generating full site PDF:', error)
    toast.error('Error generating PDF. Please try again.')
  }
}
