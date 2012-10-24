import flask

app = flask.Flask("Hello World")
count = 0


@app.route("/")
def hello():
    resp = flask.render_template("index.html", name="Doug")
    return resp


@app.route("/counter")
def counter():
    global count
    print count
    count += 1
    return flask.jsonify({"Count": count})

if __name__ == "__main__":
    app.run()
