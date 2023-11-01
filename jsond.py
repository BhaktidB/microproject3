import requests

url = 'https://file.notion.so/f/s/a438c663-645c-4570-8503-11f20cea9b18/food.json?id=9f33085a-202e-4056-a4c4-08a0036624b4&table=block&spaceId=663a35c6-2bd7-44e6-bf90-5f33d51f737c&expirationTimestamp=1698472800000&signature=4OXCG9bC-ZcXRD7DRY3ou28Na8zMadQ3scJhwXnmZ2A&downloadName=food.json'
response = requests.get(url)

if response.status_code == 200:
    with open('food.json', 'w') as file:
        file.write(response.text)
else:
    print(f"Failed to download JSON file. Status code: {response.status_code}")
