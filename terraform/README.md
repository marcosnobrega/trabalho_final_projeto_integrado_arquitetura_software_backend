# Terraform

Este projeto terraform pode ser usado para criar uma infraestrutura na AWS para uma aplicação que executa em um container no ECS com Fargate e utiliza um banco de dados no RDS.

## Resources

A execução deste terraform irá criar:

- VPC
- Uma subrede pública e uma privada em cada AZ
- Tabelas de roteamento para a subrede
- Gateway de Internet para a subrede pública
- NAT gateways com IPs elásticos para a subrede privada
- Três grupos de segurança
  - um que permite acesso HTTP/HTTPS
  - um que permite acesso a portas específicas do container
  - um que permite acesso ao banco de dados
- Um ALB + Target Group com listeners para as portas 80 e 443
- Um registro no ECR para armazenar as imagens do container
- Um cluster ECS com um serviço
  e uma task definition para executar um container com a imagem do ECR (incluindo IAM execution role)
- Um banco de dados RDS
  - protegido por uma VPC privada
  - permitindo conexão com a aplicação do container
- Bucket S3 para upload do frontend
- Cloudfront
  - para distribuir o frontend da aplicação
