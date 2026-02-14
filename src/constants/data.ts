import { Github, Linkedin, Mail, Code, Palette, Database, Cpu } from 'lucide-react';
import type { Project, Skill, SocialLink } from '@/types';

export const PROJECTS: Project[] = [

  {
    title: "Automations Platform",
    description: "Automação completa de rotinas longas diarias com integração de APIs, agendamento e monitoramento em tempo real.",
    image: "../../public/automations.jpg",
    tags: ["Python", "Selenium", "Pandas", "Flask"],
    color: "from-purple-500/20 to-pink-500/20",
    structure: []
  },
  {
    title: "AI-Powered Analytics",
    description: "Dashboard de análise de dados com machine learning para predições e insights em tempo real com visualizações interativas.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Python", "TensorFlow", "Power BI", "Fabric", "Pipeline"],
    color: "from-blue-500/20 to-cyan-500/20",
    structure: []
  },
  {
    title: "Payment System",
    description: "Sistema full stack de pagamentos via PIX com geração de QR Code dinâmico, backend escalável em NestJS e frontend moderno em React.",
    image: "../../public/payments.jpg",
    tags: ["NestJS", "TypeORM", "PostgreSQL", "React", "Vite", "TypeScript"],
    color: "from-orange-500/20 to-red-500/20",
    structure: []
  },
{
  title: "Space Wallet",
  description: "Aplicação em Python que consome APIs externas...",
  image: "/spacewallet.jpg",
  tags: ["Python", "APIs", "POO", "JSON"],
  color: "from-green-500/20 to-emerald-500/20",
  structure: [
    {
      name: "src",
      files: [
        {
          name: "conversao.py",
          language: "python",
          content: `import requests

class Conversao:
    def __init__(self, saldo):
        self.saldo = saldo
        self.dolar = 0.0

    def cotacao(self):
        url = "https://economia.awesomeapi.com.br/json/last/USD-BRL"
        response = requests.get(url).json()
        self.dolar = float(response["USDBRL"]["high"])

    def saldo_convertido(self):
        self.cotacao()
        return self.saldo / self.dolar`
        },
        {
          name: "main.py",
          language: "python",
          content: `from venda import venda_da_imagem

if __name__ == "__main__":
    valor = float(input("Quanto deseja investir em R$? "))
    venda_da_imagem(valor)`
        },
        {
          name: "nasa.py",
          language: "python",
          content: `import requests

class NasaImage:
    def __init__(self):
        self.api_key = "DEMO_KEY"
        self.preco = 200

    def get_dados(self):
        url = f"https://api.nasa.gov/planetary/apod?api_key={self.api_key}"
        response = requests.get(url).json()
        return response`
        },
        {
          name: "utils.py",
          language: "python",
          content: `import requests, json

def salvar_imagem(url, nome_arquivo="imagem_comprada.jpg"):
    img = requests.get(url).content
    with open(nome_arquivo, "wb") as f:
        f.write(img)

def salvar_historico(titulo, url, preco):
    compra = {"titulo": titulo, "url": url, "preco": preco}
    with open("historico_compras.json", "a", encoding="utf-8") as f:
        json.dump(compra, f, ensure_ascii=False)
        f.write(",\n")`
        },
        {
          name: "venda.py",
          language: "python",
          content: `from nasa import NasaImage
from conversao import Conversao
from utils import salvar_imagem, salvar_historico

def venda_da_imagem(saldo_usuario):
    nasa = NasaImage()
    user = Conversao(saldo_usuario)
    saldo_dolar = user.saldo_convertido()
    
    if saldo_dolar >= nasa.preco:
        dados = nasa.get_dados()
        salvar_imagem(dados["url"])
        salvar_historico(dados["title"], dados["url"], nasa.preco)
        print(f"\n✅ Compra feita! Acesse sua imagem: {dados['url']}")
        print(f"🖼️ Título: {dados['title']}")
        print(f"📚 Descrição: {dados['explanation'][:200]}...")
    else:
        print("❌ Saldo insuficiente.")`
        }
      ]
    },
    {
      name: "data",
      files: [
        {
          name: "wallet.json",
          language: "json",
          content: `{
  "saldo": 1000
}`
        }
      ]
    }
  ]
}

];

export const SKILLS: Skill[] = [
  { name: "Frontend", icon: Palette, items: ["TypeScript", "React", "Tailwind", "Vite", "MUI"] },
  { name: "Backend", icon: Database, items: ["Java (Spring Boot)", "NestJS", "PostgreSQL", "Python", "REST APIs"] },
  { name: "DevOps", icon: Cpu, items: ["Docker", "Linux", "GitHub Actions", "AWS", "PostgreSQL Deployment"] },
  { name: "Tools", icon: Code, items: ["Git", "Postman", "Insomnia", "Figma", "Docker Desktop"] }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/HericRibeiro',
    icon: Github
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/heric-willian-5b78722a3/',
    icon: Linkedin
  },
  {
    name: 'Email',
    href: 'mailto:hericwillianpatrick@gmail.com',
    icon: Mail
  }
];

export const CONTACT_INFO = {
  email: 'hericwillianpatrick@gmail.com',
  linkedin: 'https://www.linkedin.com/in/heric-willian-5b78722a3/'
};