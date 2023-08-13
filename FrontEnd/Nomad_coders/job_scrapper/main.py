# from file import save_to_file
# keyword = input("what do you want to search for? ")
# save_to_file(keyword, jobs)

from flask import Flask, render_template, request
from extractors.indeed import extract_indeed_jobs
from extractors.wwr import extract_wwr_jobs

app = Flask("JobScrapper")

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/search")
def search():
    keyword = request.args.get("keyword")
    indeed = extract_indeed_jobs(keyword)
    wwr = extract_wwr_jobs(keyword)
    jobs = indeed + wwr
    return render_template("search.html", keyword=keyword, jobs=jobs)

app.run("0.0.0.0", port=5050)
