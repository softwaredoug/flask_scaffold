import flask

app = flask.Flask("Hello World")


@app.route("/")
def hello():
    resp = flask.render_template("index.html", name="Doug")
    return resp

if __name__ == "__main__":
    app.run()
