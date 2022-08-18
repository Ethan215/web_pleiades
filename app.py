from flask import Flask, render_template, request, jsonify, redirect, url_for, session
import validate
#import rsa

app = Flask(__name__)

#public_key, private_key = rsa.newkeys(512)

app.secret_key = 'secret key!'




@app.route('/')
def index():
    return render_template('home.html')

@app.route('/plus/')
def terminal():
    return render_template('index.html')

@app.route('/plus/user', methods=["GET"])
def user_dashboard():
    if "user" in session:
        user = session["user"]
        return render_template('dashboard.html', username=user)

    else:
        return redirect(url_for('login_credentials'))





@app.route('/plus/login', methods=['GET', 'POST'])
def login_credentials():

    if request.method == 'POST':
        # Credentials posted by user
        username = request.form.get('username')
        password = request.form.get('password')

        #encrypted_username = rsa.encrypt(username.encode(), public_key)
        #encrypted_password = rsa.encrypt(password.encode(), public_key)
        
        if validate.validate_credentials(username, password) == True:

            session['user'] = username
            return redirect(url_for('user_dashboard'))
        else:
            return redirect(url_for('login_credentials'))

    else:
        if "user" in session:
            return redirect(url_for('user_dashboard'))
        return render_template('login.html')

@app.route('/plus/user/logout')
def logout():
    session.pop("user", None)
    return redirect(url_for('login_credentials'))


if __name__ == "__main__":
    app.run( debug=True)

