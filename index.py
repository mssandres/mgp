from flask import Flask,render_template,request
from flask_mysqldb import MySQL


app = Flask(__name__)



'''
@app.route('/')
def principal():
    return "Bienvenido o bienvenida a mi sitio web con python!!"

@app.route('/contacto')
def contacto():
    return "Aqui hay informacion de contacto"
'''

#@app.before_request
#def before_request()
#    print("Antes de la petición . . .")

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

#@app.route('')

def pagina_no_encontrada(error):
    return render_template('404.html'),404

if __name__ == '__main__':
    app.register_error_handler(404, pagina_no_encontrada)
    app.run(debug=True, port=5017)