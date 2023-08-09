# from requests import get
# from bs4 import BeautifulSoup

# base_url = "https://weworkremotely.com/remote-jobs/search?utf8=%E2%9C%93&term="
# search_term = "python"

# response = get(f"{base_url}{search_term}")
# if response.status_code != 200:
#     print("Cant' request website")
# else :
#     soup = BeautifulSoup(response.text, "html.parser")
#     jobs = soup.find_all('section', class_="jobs")

def say_hello(name, age):
    print(f"Hello {name} you are {age} years old")
    
say_hello("nico", 12)
