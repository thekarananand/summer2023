# ☀️ Jun 5, 2023
Tech : CSS, Jenkins

## Jenkinsfile

- Jenkinsfile uses Groovy 

**Sample Jenkinsfile**
``` groovy
pipeline{
    agent any

    stages {
        stage('Build'){
            steps{
                echo 'Building...'
            }
        }
        stage('Test'){
            steps{
                echo 'Testing...'
            }
        }
        stage('Deploy'){
            steps{
                echo 'Deploying...'
            }
        }
    }
}
```

- `pipeline` --> task to accomplish
- `agent`    --> build agent

CI pipeline of [GitHub / AdminTurnedDevOps / go-webapp-sample](https://github.com/AdminTurnedDevOps/go-webapp-sample)

``` groovy
pipeline{
    agent any

    environment{
        GO111MODULE='on'
    }

    stages {
        stage('Test'){
            steps{
                git 'https://github.com/AdminTurnedDevOps/go-webapp-sample.git'
                sh 'go test ./...'
            }
        }
    }
}
``` 

CI pipeline of [GitHub / AdminTurnedDevOps / go-webapp-sample](https://github.com/AdminTurnedDevOps/go-webapp-sample)

``` groovy
pipeline{
    agent any

    environment{
        GO111MODULE='on'
    }

    stages {
        stage('Dev'){
            steps{
                git 'https://github.com/AdminTurnedDevOps/go-webapp-sample.git'
            }
        }
        stage('Build'){
            steps{
                app = docker.build("adminturneddevOps/go-webapp-sample")
            }
        }
    }
}
``` 

Full pipeline of [GitHub / AdminTurnedDevOps / go-webapp-sample](https://github.com/AdminTurnedDevOps/go-webapp-sample)

``` groovy
pipeline{
    agent any

    environment{
        GO111MODULE='on'
    }

    stages {
        stage('Test'){
            steps{
                git 'https://github.com/AdminTurnedDevOps/go-webapp-sample.git'
                sh 'go test ./...'
            }
        }
        stage('Build'){
            steps{
                git 'https://github.com/AdminTurnedDevOps/go-webapp-sample.git'
                sh 'go build .'
            }
        }
        stage('Run'){
            steps{
                git 'cd /var/jenkins_home/workspace/go3 && go-webapp-sample &'
            }
        }
    }
}
``` 

# CSS

## Overflow & Sliders

### Horizontal Slider

``` css
.container {
    display: flex
    overflow-x: auto;
}
```

### Vertical Slider

``` css
.container {
    overflow-y: auto;
}
```

### Slider Style

``` css
.Card-Holder::-webkit-scrollbar{
    height: 0.4rem;
}

.Card-Holder::-webkit-scrollbar-track{
    background-color:  var(--bg-clr-100);
    border-radius: 100vh;
}

.Card-Holder::-webkit-scrollbar-thumb{
    background-color:  var(--accent-clr);
    outline: 1px solid black;
    border-radius: 100vh; 
}
```