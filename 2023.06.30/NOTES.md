# ☀️ Jun 30, 2023
Tech : Terraform, React

# Terraform

## HCL - HashiCorp Configuration Language

### Basic Syntax

``` HCL
<BLOCK> "<PARAMETERS>" {
    arg1 = val1
    arg1 = val2
}
```

**Example : Creating games.txt file 📄 main.tf**

``` HCL
resource "local_file" "games" {
    filename = "/home/thekarananand/Desktop/games_list.txt"
    content = "DOOM"
}
```

- `"games"` is the name of the resource 
- `"local_file"` is the resource type,
    - `local` is the resource provider,
    - `file` is the resource,


## Basic Command

- To initialize the terraform in the current working directory

    ``` bash
    terraform init
    ```

- To Check the Terraform's Plan to deploy resource

    ``` bash
    terraform plan
    ```

- To Deploy resource with Terraform

    ``` bash
    terraform apply
    ```

- To Destroy Deployed resource with Terraform

    ``` bash
    terraform destroy
    ```

---

# React

## Solved React Labs @ [scrimba.com](scrimba.com)
