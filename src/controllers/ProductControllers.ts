import "reflect-metadata";
import {
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  JsonController,
  NotFoundError,
  BadRequestError,
} from "routing-controllers";
import { ProductDTO } from "../dto/Product";
import { MESSAGE_ERROR } from "../const/message-error.const";
import { ProductInterface } from "../interfaces/product.interface";

@JsonController("/products")
export class ProductController {
  products: ProductInterface[] = [
    {
      id: "uno",
      name: "Tarjeta Visa Signature",
      description: "Una tarjeta de crédito Visa Signature con beneficios exclusivos.",
      logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
      date_release: new Date("2025-01-01"),
      date_revision: new Date("2025-10-01"),
    },
    {
      id: "dos",
      name: "Tarjeta Mastercard Gold",
      description: "Una tarjeta de crédito Mastercard Gold con recompensas.",
      logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
      date_release: new Date("2025-02-01"),
      date_revision: new Date("2025-11-01"),
    },
  ];

  @Get("")
  getAll() {
    return { data: [...this.products] }; // Solo una respuesta
  }

  // Otros métodos...
}