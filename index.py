from flask import Flask,render_template,request

app = Flask(__name__)

@app.route('/')
def principal():
    return  render_template('mapa.html')

@app.route('/lenguajes')
def mostrarLenguajes():
    misLenguajes=("PHP","Python","Java","C#",
                "JavaScript","Perl","Ruby","Rust")
    
    return  render_template('lenguajes.html',lenguajes=misLenguajes)

@app.route('/contacto')
def contacto():
    return  render_template('contacto.html')

def pagina_no_encontrada(error):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.register_error_handler(404, pagina_no_encontrada)
    app.run(debug=False,host='0.0.0.0', port=8080)