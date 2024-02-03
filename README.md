ESLint is the most popular JavaScript linter. The term lint, or a linter, is a static code analysis tool used to flag programming errors, bugs, stylistic errors and suspicious constructs.

1. npm install eslint -g                                            To install ESLint Globally
2. npm install eslint --save-dev                                    To install ESLint Locally in the Application
3. npx eslint -v                                                    To check eslint version
4. npm init -y                                                      To create package.json file
5. npx eslint --init or npm init @eslint/config                     To use (launch) ESLint and gives Tons of questions 
6. npx eslint folder/fileName                                       To show all errors if it has (After answer all questions)
7. npx eslint folder/fileName --fix                                 Fixes all problems except the ones that need to be removed.
8. npm run lint                                                     After doing some changes in package.json 
9. npm run lint-fix                                                 After doing some changes in package.json 

When you launch 5th line code it give some questions and answers is below
1. How would you like to use ESLint?                                To check syntax, find problems, and enforce code style
2. What type of modules does your project use?                      JavaScript modules (import/export)
3. Which framework does your project use?                           None of these
4. Does your project use TypeScript?                                No
5. Where does your code run?                                        Browser
6. How would you like to define a style for your project?           Answer questions about your style
7. What format do you want your config file to be in?               JavaScript
8. What style of indentation do you use?                            Spaces
9. What quotes do you use for strings?                              Single
10. What line endings do you use?                                   Windows
11. Do you require semicolons?                                      Yes
12. Would you like to install them now?                             Yes
13. Which package manager do you want to use?                       npm



All ESLint Rules:  https://eslint.org/docs/latest/rules/
Configure  Rules:  https://eslint.org/docs/latest/use/configure/rules