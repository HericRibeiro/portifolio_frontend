import { Github, Linkedin, Mail, Code, Palette, Database, Cpu } from 'lucide-react';
import type { Project, Skill, SocialLink } from '@/types';

export const PROJECTS: Project[] = [

  {
    title: "Automations Platform",
    description: "Automação completa de rotinas longas diarias com integração de APIs, agendamento e monitoramento em tempo real.",
    image: "/automations.jpg",
    tags: ["Python", "Selenium", "Pandas", "Flask"],
    color: "from-purple-500/20 to-pink-500/20",
    structure: [
      {
        name: "src",
        files: [
          {
            name: "config.py",
            language: "python",
            content: `from dotenv import load_dotenv
import os

load_dotenv()

config = {
    "link_Web": os.getenv("LINK_PORTAL"),
    "nome_Arquivo": os.getenv("NOME"),
    "diretorio_Origem": os.getenv("DIRETORIO_ORIGEM_ARQUIVO"),
    "diretorio_Destino": os.getenv("DIRETORIO_DESTINO_ARQUIVO"),
    "diretorio_Download": os.getenv("DIRETORIO_DOWNLOAD_PASTA"),
    "pasta": os.getenv("pastaFim"), # substituir por DIRETORIO_DESTINO_ARQUIVO
    "caminho_arquivo_erro": os.getenv("CAMINHO_ARQUIVO_LOG"),
    "acesso": os.getenv("XPATH_ACESSO"),
    "confirmacao_Acesso": os.getenv('XPATH_CONFIRMACAO_ACESSO'),
    "modulo": os.getenv("XPATH_MODULO"),
    "extracao_Tabela": os.getenv("XPATH_EXTRACAO_TABELA"),
    "xpath": os.getenv("XPATH"),
}`
          },
          {
            name: "download_arquivo.py",
            language: "python",
            content: `from selenium import webdriver
from config import config
import time
import logging

def download_arquivo(navegador: webdriver.Edge):
    try:
        window_handles = navegador.window_handles
        navegador.switch_to.window(window_handles[-1])
        time.sleep(3)  

        # Quantidade de Chamadas.
        navegador.find_element(config['xapth'], config['extracao_Tabela']).click()
        logging.info('Baixando Arquivo!')
        time.sleep(190)
        logging.info('Arquivo baixado')

    except Exception as e:
        logging.error(f"Erro na extração de dados: {e}")

    finally:
        if 'navegador' in locals():
            navegador.quit()`
          },
          {
            name: "logger.py",
            language: "python",
            content: `import logging
import os
from logging.handlers import RotatingFileHandler
from config import config

def setup_logging():
    if not os.path.exists(config["pasta_logs"]):
        os.makedirs(config["pasta_logs"])

    log_format = (
        "%(asctime)s - %(levelname)s - %(module)s - "
        "linha:%(lineno)d - %(message)s"
    )

    logging.basicConfig(
        level=logging.INFO,  
        format=log_format,
        handlers=[
            RotatingFileHandler(
                os.path.join(config["pasta_logs"], "automacao.log"),
                maxBytes=5 * 1024 * 1024,
                backupCount=10,
                encoding="utf-8",
            ),
            logging.StreamHandler()
        ],
    )`
          },
          {
            name: "login.py",
            language: "python",
            content: `from selenium import webdriver
from config import config
import logging
import time

def login(navegador: webdriver.Edge):
    try:
        navegador.implicitly_wait(5)  
        navegador.get(config['link_Web'])  
        navegador.maximize_window()
        time.sleep(3)  

        navegador.find_element(config['xpath'], config['acesso']).click()
        time.sleep(3)  
        
        navegador.find_element(config['xapth'], config['confirmacao_Acesso']).click()
        time.sleep(2)
        
        navegador.find_element(config['xapth'], config['modulo']).click() 
        time.sleep(4)
        logging.info('Modulo')

        window_handles = navegador.window_handles
        navegador.switch_to.window(window_handles[-1])
        time.sleep(3)
    except Exception as e:
        logging.error(f"Falha no login: {e}")`
          },
          {
            name: "main.py",
            language: "python",
            content: `from config import config
from selenium import webdriver
from login import login
from download_arquivo import download_arquivo
from mover_arquivo import mover_arquivo
from obter_arquivo_recente import obter_arquivo_recente
from logger import setup_logging
import pandas as pd
import logging


def automacao_Extracao():
    setup_logging()
    navegador = webdriver.Edge()  
    try:
        logging.info("Iniciando automação!")
        logging.info("Iniciando locomoção de arquivo antigo!")
        if not mover_arquivo(config['nome_Arquivo'], config['diretorio_Origem'], config['diretorio_Destino']):
            logging.error("Falha na locomoção de arquivo para pasta de antigos!")
            

        logging.info("Iniciando login!")
        if not login(navegador):
            logging.error("Falha no login!")

        logging.info("Iniciando download!")
        if not download_arquivo(navegador):
            logging.error("Falha no download do arquivo!")


        logging.info("Iniciando locomoção do arquivo!")
        if not mover_arquivo(config['nome_Arquivo'], config['diretorio_Download'], config['diretorio_Origem']):
            logging.error("Falha na locomoção do arquivo!")
            
        caminho_arquivo = obter_arquivo_recente(config['diretorio_Destino'], config['nome_Arquivo'])
        
        df = pd.read_csv(caminho_arquivo)
        num_lines = len(df)
        logging.info("Automação Concluída")
        logging.info(f"Número de linhas no arquivo CSV: {num_lines}")

    except FileNotFoundError as e:
        logging.error(f"Falha na automação: {e}")


if __name__ == '__main__':
    automacao_Extracao()`
          },
          {
            name: "mover_arquivo.py",
            language: "python",
            content: `import pathlib
import logging
import shutil

def mover_arquivo(nome_padrao, origem, destino):
    diretorio = pathlib.Path(origem)
    arquivos = diretorio.glob(nome_padrao)
    for arquivo in arquivos:
        try:
            csv_file = arquivo
            logging.info(f"Arquivo encontrado: {csv_file}")
            string = str(csv_file)
            modificado = string.replace("\\", "/")
            logging.info(f"Movendo arquivo: {modificado}")
            shutil.move(modificado, destino)
        except FileNotFoundError:
            logging.warning(f"Arquivo não encontrado: {nome_padrao}")
        except Exception as e:
            logging.error(f"Erro ao mover arquivo: {e}")`
          },
          {
            name: "obter_arquivo_recente.py",
            language: "python",
            content: `import pathlib

def obter_arquivo_recente(pasta, padrao):
    diretorio = pathlib.Path(pasta)
    arquivos = list(diretorio.glob(padrao))
    if not arquivos:
        raise FileNotFoundError(f"Nenhum arquivo encontrado com o padrão: {padrao}")
    arquivo_recente = max(arquivos, key=lambda f: f.stat().st_mtime)
    return str(arquivo_recente)`
          }
        ]
      }
    ]
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
    image: "/payments.jpg",
    tags: ["NestJS", "TypeORM", "PostgreSQL", "React", "Vite", "TypeScript"],
    color: "from-orange-500/20 to-red-500/20",
    structure: [
      {
        name: "src",
        files: [
          {
            name: "app.module.ts",
            language: "typescript",
            content: `import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { Transaction } from './transactions.entity';
import { PaymentsController } from './payments.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      synchronize: true,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      entities: [Transaction],
    }),

    TypeOrmModule.forFeature([Transaction]),
  ],
  controllers: [TransactionsController, PaymentsController],
  providers: [TransactionsService],
})
export class AppModule {}`
          },
          {
            name: "main.ts",
            language: "typescript",
            content: `import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;
  const frontendUrl = configService.get<string>('FRONTEND_URL') || '*';

  app.enableCors({
    origin: frontendUrl,
    credentials: true,
  });

  await app.listen(port);
  console.log('🚀 Backend com TypeScript rodando em http://localhost:{port}');
  // foi adicionado aspas simples para evitar problemas no código
}
bootstrap();`
          },
          {
            name: "payments.controller.ts",
            language: "typescript",
            content: `import { Controller, Post, Body } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import * as QRCode from 'qrcode';

@Controller('/payments')
export class PaymentsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('/pix')
  async createPixPayment(@Body() body: any) {
    const novaTransacao = await this.transactionsService.create({
      amount: body.amount,
      status: 'pendente',
      customerName: body.customerName || '',
      city: body.city || '',
    });

    const payload = process.env.QR_PAYLOAD || '';
    const qrDataUrl = await QRCode.toDataURL(payload);

    return {
      message: 'Transação criada com sucesso',
      transaction: novaTransacao,
      qr_code_image_base64: qrDataUrl,
      qr_code_copy_paste: process.env.PIX_COPY_PASTE || '',
    };
  }
}`
          },
          {
            name: "transactions.controller.ts",
            language: "typescript",
            content: `import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Transaction } from './transactions.entity';

@Controller(process.env.TRANSACTIONS_BASE_PATH || 'transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('webhook')
  async createTransaction(@Body() payload: any): Promise<Transaction> {
    return this.transactionsService.create(payload);
  }

  @Get()
  async findAll(@Query() filters: any): Promise<Transaction[]> {
    return this.transactionsService.findAll(filters);
  }
}`
          },
          {
            name: "transactions.entity.ts",
            language: "typescript",
            content: `import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  amount!: number;

  @Column()
  status!: string;

  @Column({ nullable: true })
  customerName!: string;

  @Column({ nullable: true })
  city!: string;
}`
          },
          {
            name: "transactions.service.ts",
            language: "typescript",
            content: `import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Transaction } from './transactions.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction, process.env.TRANSACTIONS_TABLE)
    private repo: Repository<Transaction>
  ) {}

  async create(payload: Partial<Transaction>): Promise<Transaction> {
    const transaction = this.repo.create(payload);
    return await this.repo.save(transaction);
  }

  async findAll(filters: any) {
    const where: Record<string, any> = {};
    for (const [key, value] of Object.entries(filters)) {
      where[key] = ILike('%{value}%');
    }
    // foi adicionado aspas simples para evitar problemas no código
    return await this.repo.find({ where });
  }
}`
          }
        ]
      }
    ]
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