import flask

app = flask.Flask("Hello World")
counts = {}


@app.route("/")
def hello():
    resp = flask.render_template("index.html", name="Doug")
    return resp


@app.route("/counter/<int:counterId>", methods=["POST", "GET", "PUT"])
def counter(counterId):
    global counts

    print "Processing counter!"

    print str(flask.request)
    print "Text: %s" % flask.request.data

    # POST -- set the counter to the passed in value
    if flask.request.method == "POST":
        counts[counterId] = flask.request.json["value"]
        return flask.make_response("", 200)

    # PUT -- create a new counter with passed in value
    elif flask.request.method == "PUT":
        counts[counterId] = flask.request.json["value"]
        print repr(counts)
        return flask.make_response("", 201)

    # GET return the value of the count in JSON
    elif flask.request.method == "GET":
        print "GET...%i" % counterId
        if counterId in counts:
            resp = {"value": counts[counterId]}
            return flask.jsonify(resp)
        else:
            return flask.make_response("Error 404!", 404)


if __name__ == "__main__":
    app.run(debug=True)
