# from extractors.wwr import extract_wwr_jobs
# from extractors.indeed import extract_indeed_jobs
# from file import save_to_file

# keyword = input("what do you want to search for? ")

# indeed = extract_indeed_jobs(keyword)
# wwr = extract_wwr_jobs(keyword)
# jobs = indeed + wwr

# save_to_file(keyword, jobs)

from flask import Flask

app = Flask("JobScrapper")

@app.route("/")
def home():
    return 'hey there!'

app.run("0.0.0.0", port=5050)
