from fpdf import FPDF
pdf = FPDF()
pdf.add_page()
pdf.set_font("Arial", size=15)
pdf.cell(200, 10, txt="CV de Hassimiou Thioye", ln=1, align='C')
pdf.cell(200, 10, txt="[RAPPEL] Veuillez remplacer ce fichier par votre veritable document.", ln=1, align='C')
pdf.output("public/mon-cv.pdf")
