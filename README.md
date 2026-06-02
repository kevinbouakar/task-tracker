# 1. About
- - -
shareQ Task Tracker Application requested from my internship. This application allows users to log into their account and manage their task list properly. 

# 2. File Structure

```
task-tracker/
    ├─── index.html
    ├─── README.md
    ├─── script.js
    └─── style.css
```
# 3. How To?
## Online Demo:
Simply visit the following URL Link: https://kevinbouakar.github.io/task-tracker/

## Local Demo:
Paste the following in your terminal:
**Windows**
```pwsh
git clone https://github.com/kevinbouakar/task-tracker.git
cd task-tracker
start index.html
```
**Linux**
```bash
git clone https://github.com/kevinbouakar/task-tracker.git
cd task-tracker
xdg-open index.html
```

**macOS**
```bash
git clone https://github.com/kevinbouakar/task-tracker.git
cd task-tracker
open index.html
```
# 4. Known Limitations
- Having your credentials in plain Javascript is very dangerous and should not be best practice use.
- Anyone can view your Javascript with a simple "View Source Code".
- Using LocalStorage is a good way to learn but in real applications, use of sessions and tokens is suggested