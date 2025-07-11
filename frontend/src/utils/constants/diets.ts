import {mealImages} from './mealImages';
export interface Meal {
  day_of_week: string;
  time_of_day: string;
  food_name: string;
  food_category: string;
  image_url: string,
  calories: number;
}

export interface Diet {
  id: string;
  name: string;
  description: string;
  meals: Meal[];
}

export const diets: Diet[] = [
  {
  id: "1",
  name: "Dieta para Bajar de Peso",
  description: "Diseñada para promover una pérdida de peso saludable y sostenible.",
  meals: [
    // LUNES
    {
      day_of_week: "MONDAY",
      time_of_day: "08:00:00",
      food_name: "Avena cocida con manzana y canela",
      food_category: "Grano",
      image_url: mealImages.avenaConManzanaCanela,
      calories: 250
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "13:00:00",
      food_name: "Ensalada de pollo con vegetales y quinoa",
      food_category: "Proteína",
      image_url: mealImages.ensaladaPolloVegetales,
      calories: 400
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "21:00:00",
      food_name: "Sopa de verduras y pescado al vapor",
      food_category: "Vegetal",
      image_url: mealImages.sopaVerdurasPescado,
      calories: 350
    },

    // MARTES
    {
      day_of_week: "TUESDAY",
      time_of_day: "08:00:00",
      food_name: "Yogur natural con frutillas y semillas de chía",
      food_category: "Lácteo",
      image_url: mealImages.yogurFrutillaChia,
      calories: 230
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "13:00:00",
      food_name: "Tortilla de espinaca con ensalada de zanahoria",
      food_category: "Vegetal",
      image_url: mealImages.tortillaVerduras,
      calories: 380
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "21:00:00",
      food_name: "Sopa crema de zapallo y huevo duro",
      food_category: "Vegetal",
      image_url: mealImages.sopaVerdurasPescado,
      calories: 330
    },

    // MIÉRCOLES
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "08:00:00",
      food_name: "Tostadas integrales con palta y tomate",
      food_category: "Grano",
      image_url: mealImages.tostadasPaltaTomate,
      calories: 240
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "13:00:00",
      food_name: "Wok de vegetales con tofu y arroz integral",
      food_category: "Vegetal",
      image_url: mealImages.ensalada,
      calories: 390
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "21:00:00",
      food_name: "Pechuga de pollo con puré",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 360
    },

    // JUEVES
    {
      day_of_week: "THURSDAY",
      time_of_day: "08:00:00",
      food_name: "Smoothie de banana y avena con leche descremada",
      food_category: "Fruta",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 220
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "13:00:00",
      food_name: "Filete de pescado con ensalada de hojas verdes",
      food_category: "Proteína",
      image_url: mealImages.filetePescadoVerduras,
      calories: 370
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "21:00:00",
      food_name: "Sopa crema de zapallo y huevo duro",
      food_category: "Vegetal",
      image_url: mealImages.sopaVerdurasPescado,
      calories: 330
    },

    // VIERNES
    {
      day_of_week: "FRIDAY",
      time_of_day: "08:00:00",
      food_name: "Huevos revueltos con espinaca y una tostada integral",
      food_category: "Proteína",
      image_url: mealImages.huevosEspinaca,
      calories: 260
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "13:00:00",
      food_name: "Hamburguesa vegetal con tomate y lechuga",
      food_category: "Vegetal",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 400
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "21:00:00",
      food_name: "Tarta de verduras sin masa con ensalada de repollo",
      food_category: "Vegetal",
      image_url: mealImages.tortillaVerduras,
      calories: 350
    },

    // SÁBADO
    {
      day_of_week: "SATURDAY",
      time_of_day: "08:00:00",
      food_name: "Porridge de avena con pera y canela",
      food_category: "Grano",
      image_url: mealImages.avenaConManzanaCanela,
      calories: 240
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "13:00:00",
      food_name: "Milanesa de berenjena con ensalada de arroz integral",
      food_category: "Vegetal",
      image_url: mealImages.milanesa,
      calories: 390
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "21:00:00",
      food_name: "Revuelto de zapallitos y zanahoria con pollo",
      food_category: "Proteína",
      image_url: mealImages.ensaladaPolloVegetales,
      calories: 340
    },

    // DOMINGO
    {
      day_of_week: "SUNDAY",
      time_of_day: "08:00:00",
      food_name: "Café con leche descremada y dos tostadas con queso untable light",
      food_category: "Lácteo",
      image_url: mealImages.cafeFacturas,
      calories: 230
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "13:00:00",
      food_name: "Fideos integrales con vegetales salteados",
      food_category: "Grano",
      image_url: mealImages.pastaCarneBrocoli,
      calories: 380
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "21:00:00",
      food_name: "Ensalada de atún con garbanzos y tomate",
      food_category: "Proteína",
      image_url: mealImages.ensalada,
      calories: 360
    }
  ]
},
{
  id: "2",
  name: "Dieta para Ganar Peso",
  description: "Pensada para aumentar masa corporal de manera saludable.",
  meals: [
    // LUNES
    {
      day_of_week: "MONDAY",
      time_of_day: "08:00:00",
      food_name: "Tostadas con palta, huevo y queso",
      food_category: "Grano",
      image_url: mealImages.tostadasPaltaHuevo,
      calories: 450
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "13:00:00",
      food_name: "Pasta integral con carne magra y queso",
      food_category: "Grano",
      image_url: mealImages.pastaCarneBrocoli,
      calories: 650
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "20:00:00",
      food_name: "Arroz con pollo y vegetales salteados",
      food_category: "Proteína",
      image_url: mealImages.arrozPolloVerduras,
      calories: 600
    },

    // MARTES
    {
      day_of_week: "TUESDAY",
      time_of_day: "08:00:00",
      food_name: "Smoothie de leche entera, banana y avena con mantequilla de maní",
      food_category: "Lácteo",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 520
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "13:00:00",
      food_name: "Hamburguesa casera con arroz y huevo",
      food_category: "Proteína",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 690
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "20:00:00",
      food_name: "Pechuga de pollo con puré de papa",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 620
    },

    // MIÉRCOLES
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "08:00:00",
      food_name: "Yogur entero con granola y frutos secos",
      food_category: "Lácteo",
      image_url: mealImages.yogurGriego,
      calories: 480
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "13:00:00",
      food_name: "Arroz con atún, huevo y mayonesa",
      food_category: "Proteína",
      image_url: mealImages.arrozPolloVerduras,
      calories: 680
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "20:00:00",
      food_name: "Pizza casera con vegetales y mozzarella",
      food_category: "Grano",
      image_url: mealImages.pizzaCarneHuevo,
      calories: 630
    },

    // JUEVES
    {
      day_of_week: "THURSDAY",
      time_of_day: "08:00:00",
      food_name: "Smoothie de leche entera, banana y avena con mantequilla de maní",
      food_category: "Lácteo",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 520
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "13:00:00",
      food_name: "Hamburguesa casera con arroz y huevo",
      food_category: "Proteína",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 690
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "20:00:00",
      food_name: "Tarta de pollo con ensalada rusa",
      food_category: "Proteína",
      image_url: mealImages.ensaladaPolloVegetales,
      calories: 610
    },

    // VIERNES
    {
      day_of_week: "FRIDAY",
      time_of_day: "08:00:00",
      food_name: "Smoothie de leche entera, banana y avena con mantequilla de maní",
      food_category: "Lácteo",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 520
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "13:00:00",
      food_name: "Hamburguesa casera con arroz y huevo",
      food_category: "Proteína",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 690
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "20:00:00",
      food_name: "Estofado de carne con papas y zanahorias",
      food_category: "Proteína",
      image_url: mealImages.carneVerduras,
      calories: 640
    },

    // SÁBADO
    {
      day_of_week: "SATURDAY",
      time_of_day: "08:00:00",
      food_name: "Cereal con leche entera, pasas y nueces",
      food_category: "Grano",
      image_url: mealImages.yogurGriego,
      calories: 470
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "13:00:00",
      food_name: "Milanesa de carne con papas al horno",
      food_category: "Proteína",
      image_url: mealImages.milanesa,
      calories: 710
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "20:00:00",
      food_name: "Arroz con pollo y vegetales salteados",
      food_category: "Proteína",
      image_url: mealImages.arrozPolloVerduras,
      calories: 600
    },

    // DOMINGO
    {
      day_of_week: "SUNDAY",
      time_of_day: "08:00:00",
      food_name: "Huevos revueltos con tostadas y palta",
      food_category: "Proteína",
      image_url: mealImages.tostadasPaltaHuevo,
      calories: 460
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "13:00:00",
      food_name: "Hamburguesa casera con arroz y huevo",
      food_category: "Proteína",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 690
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "20:00:00",
      food_name: "Arroz con pollo y vegetales salteados",
      food_category: "Proteína",
      image_url: mealImages.arrozPolloVerduras,
      calories: 600
    }
  ]
},
{
  id: "3",
  name: "Dieta para Ganar Musculatura",
  description: "Alto contenido proteico y energético, ideal para entrenamiento de fuerza.",
  meals: [
    {
      day_of_week: "MONDAY",
      time_of_day: "08:00:00",
      food_name: "Batido de proteína con avena y banana",
      food_category: "Proteína",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 450
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "13:00:00",
      food_name: "Pollo a la plancha con pure",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 600
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "20:00:00",
      food_name: "Arroz con mariscos y verduras salteadas",
      food_category: "Proteína",
      image_url: mealImages.arrozPolloVerduras,
      calories: 710
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "08:00:00",
      food_name: "Smoothie de leche, avena, banana y proteína",
      food_category: "Proteína",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 460
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "13:00:00",
      food_name: "Pechuga de pollo con puré",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 620
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "20:00:00",
      food_name: "Bife de carne magra con puré de batata",
      food_category: "Proteína",
      image_url: mealImages.carneVerduras,
      calories: 720
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "08:00:00",
      food_name: "Yogur griego con nueces y miel",
      food_category: "Lácteo",
      image_url: mealImages.yogurGriego,
      calories: 460
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "13:00:00",
      food_name: "Filete de merluza con arroz integral y verduras",
      food_category: "Proteína",
      image_url: mealImages.filetePescadoVerduras,
      calories: 610
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "20:00:00",
      food_name: "Pasta integral con carne magra y salsa de tomate",
      food_category: "Grano",
      image_url: mealImages.pastaCarneBrocoli,
      calories: 690
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "08:00:00",
      food_name: "Pan integral con palta, tomate y jamón cocido",
      food_category: "Graso",
      image_url: mealImages.panIntegral,
      calories: 430
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "13:00:00",
      food_name: "Carne de cerdo con puré de calabaza y ensalada",
      food_category: "Proteína",
      image_url: mealImages.carneVerduras,
      calories: 630
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "20:00:00",
      food_name: "Estofado de ternera con verduras y arroz",
      food_category: "Proteína",
      image_url: mealImages.carneVerduras,
      calories: 710
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "08:00:00",
      food_name: "Huevos revueltos con tostadas integrales y tomate",
      food_category: "Proteína",
      image_url: mealImages.tostadasPaltaHuevo,
      calories: 440
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "13:00:00",
      food_name: "Pollo con puré",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 620
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "20:00:00",
      food_name: "Milanesa de carne magra con puré de papas",
      food_category: "Proteína",
      image_url: mealImages.milanesa,
      calories: 700
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "08:00:00",
      food_name: "Smoothie de leche, avena, banana y proteína",
      food_category: "Proteína",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 460
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "13:00:00",
      food_name: "Carne a la parrilla con ensalada y batatas al horno",
      food_category: "Proteína",
      image_url: mealImages.carneVerduras,
      calories: 640
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "20:00:00",
      food_name: "Arroz con mariscos y verduras salteadas",
      food_category: "Proteína",
      image_url: mealImages.arrozPolloVerduras,
      calories: 710
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "08:00:00",
      food_name: "Smoothie de leche, avena, banana y proteína",
      food_category: "Proteína",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 460
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "13:00:00",
      food_name: "Milanesa de pollo con puré de calabaza y ensalada",
      food_category: "Proteína",
      image_url: mealImages.milanesa,
      calories: 630
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "20:00:00",
      food_name: "Milanesa de carne magra con puré de papas",
      food_category: "Proteína",
      image_url: mealImages.milanesa,
      calories: 700
    }
  ]
},
{
  id: "4",
  name: "Dieta para Personas con Diabetes",
  description: "Control de carbohidratos, grasas saludables y bajo índice glucémico.",
  meals: [
    // LUNES
    {
      day_of_week: "MONDAY",
      time_of_day: "08:00:00",
      food_name: "Avena con leche descremada y semillas de chía",
      food_category: "Grano",
      image_url: mealImages.avenaConManzanaCanela,
      calories: 320
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "13:00:00",
      food_name: "Pechuga de pollo con pure",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 450
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "20:00:00",
      food_name: "Tortilla de vegetales con una rebanada de pan integral",
      food_category: "Vegetal",
      image_url: mealImages.tortillaVerduras,
      calories: 400
    },

    // MARTES
    {
      day_of_week: "TUESDAY",
      time_of_day: "08:00:00",
      food_name: "Yogur natural sin azúcar con frutos rojos y nueces",
      food_category: "Lácteo",
      image_url: mealImages.yogurGriego,
      calories: 310
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "13:00:00",
      food_name: "Filete de merluza con puré de calabaza y brócoli al vapor",
      food_category: "Proteína",
      image_url: mealImages.filetePescadoVerduras,
      calories: 440
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "20:00:00",
      food_name: "Ensalada de atún con huevo duro y espinaca",
      food_category: "Proteína",
      image_url: mealImages.ensalada,
      calories: 410
    },

    // MIÉRCOLES
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "08:00:00",
      food_name: "Tostadas integrales con palta y tomate",
      food_category: "Grano",
      image_url: mealImages.tostadasPaltaTomate,
      calories: 330
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "13:00:00",
      food_name: "Pechuga de pollo con pure",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 450
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "20:00:00",
      food_name: "Revuelto de vegetales con huevo y champiñones",
      food_category: "Vegetal",
      image_url: mealImages.huevosEspinaca,
      calories: 400
    },

    // JUEVES
    {
      day_of_week: "THURSDAY",
      time_of_day: "08:00:00",
      food_name: "Huevos revueltos con espinaca y tomate",
      food_category: "Proteína",
      image_url: mealImages.huevosEspinaca,
      calories: 300
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "13:00:00",
      food_name: "Ensalada de lentejas con tomate, cebolla y perejil",
      food_category: "Grano",
      image_url: mealImages.ensalada,
      calories: 450
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "20:00:00",
      food_name: "Pollo al horno con puré",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 410
    },

    // VIERNES
    {
      day_of_week: "FRIDAY",
      time_of_day: "08:00:00",
      food_name: "Smoothie de espinaca, manzana verde y semillas de lino",
      food_category: "Fruta",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 320
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "13:00:00",
      food_name: "Pollo con puré",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 460
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "20:00:00",
      food_name: "Revuelto de vegetales con huevo y champiñones",
      food_category: "Vegetal",
      image_url: mealImages.huevosEspinaca,
      calories: 400
    },

    // SÁBADO
    {
      day_of_week: "SATURDAY",
      time_of_day: "08:00:00",
      food_name: "Pan integral con queso fresco y tomate",
      food_category: "Lácteo",
      image_url: mealImages.panIntegral,
      calories: 310
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "13:00:00",
      food_name: "Carne magra a la plancha con ensalada mixta y zapallitos",
      food_category: "Proteína",
      image_url: mealImages.carneVerduras,
      calories: 470
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "20:00:00",
      food_name: "Sopa de verduras con tofu",
      food_category: "Vegetal",
      image_url: mealImages.sopaVerdurasPescado,
      calories: 390
    },

    // DOMINGO
    {
      day_of_week: "SUNDAY",
      time_of_day: "08:00:00",
      food_name: "Avena con manzana rallada y canela",
      food_category: "Grano",
      image_url: mealImages.avenaConManzanaCanela,
      calories: 320
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "13:00:00",
      food_name: "Pechuga de pollo con pure",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 450
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "20:00:00",
      food_name: "Tortilla de vegetales con una rebanada de pan integral",
      food_category: "Vegetal",
      image_url: mealImages.tortillaVerduras,
      calories: 400
    }
  ]
},
{
  "id": "6",
  "name": "Dieta para la Salud del Corazón",
  "description": "Enfocada en reducir la presión arterial y mejorar el colesterol.",
  "meals": [
    {
      "day_of_week": "MONDAY",
      "time_of_day": "08:00:00",
      "food_name": "Avena con nueces y arándanos",
      "food_category": "Grano",
      "image_url":mealImages.avenaConManzanaCanela,
      "calories": 350
    },
    {
      "day_of_week": "MONDAY",
      "time_of_day": "13:00:00",
      "food_name": "Ensalada de legumbres con aceite de oliva y salmón",
      "food_category": "Proteína",
      "image_url":mealImages.ensalada,
      "calories": 500
    },
    {
      "day_of_week": "MONDAY",
      "time_of_day": "20:00:00",
      "food_name": "Verduras al vapor con tofu y arroz integral",
      "food_category": "Vegetal",
      "image_url":mealImages.ensalada,
      "calories": 450
    },
    {
      "day_of_week": "TUESDAY",
      "time_of_day": "08:00:00",
      "food_name": "Tostadas integrales con aguacate y tomate",
      "food_category": "Grano",
      "image_url":mealImages.tostadasPaltaTomate,
      "calories": 340
    },
    {
      "day_of_week": "TUESDAY",
      "time_of_day": "13:00:00",
      "food_name": "Filete de trucha con quinoa y espárragos",
      "food_category": "Proteína",
      "image_url":mealImages.filetePescadoVerduras,
      "calories": 510
    },
    {
      "day_of_week": "TUESDAY",
      "time_of_day": "20:00:00",
      "food_name": "Sopa de verduras con garbanzos",
      "food_category": "Vegetal",
      "image_url":mealImages.sopaVerdurasPescado,
      "calories": 430
    },
    {
      "day_of_week": "WEDNESDAY",
      "time_of_day": "08:00:00",
      "food_name": "Yogur natural con semillas de lino y frambuesas",
      "food_category": "Lácteo",
      "image_url":mealImages.yogurGriego,
      "calories": 360
    },
    {
      "day_of_week": "WEDNESDAY",
      "time_of_day": "13:00:00",
      "food_name": "Ensalada de pollo, espinaca y nueces",
      "food_category": "Proteína",
      "image_url":mealImages.ensaladaPolloVegetales,
      "calories": 490
    },
    {
      "day_of_week": "WEDNESDAY",
      "time_of_day": "20:00:00",
      "food_name": "Pisto de verduras con huevo pochado",
      "food_category": "Vegetal",
      "image_url":mealImages.ensalada,
      "calories": 440
    },
    {
      "day_of_week": "THURSDAY",
      "time_of_day": "08:00:00",
      "food_name": "Smoothie verde con espinaca, pepino y manzana",
      "food_category": "Fruta",
      "image_url":mealImages.licuadoAvenaBanana,
      "calories": 330
    },
    {
      "day_of_week": "THURSDAY",
      "time_of_day": "13:00:00",
      "food_name": "Salmón al horno con brócoli y batata",
      "food_category": "Proteína",
      "image_url":mealImages.filetePescadoVerduras,
      "calories": 520
    },
    {
      "day_of_week": "THURSDAY",
      "time_of_day": "20:00:00",
      "food_name": "Ensalada tibia de lentejas y verduras",
      "food_category": "Vegetal",
      "image_url":mealImages.ensalada,
      "calories": 440
    },
    {
      "day_of_week": "FRIDAY",
      "time_of_day": "08:00:00",
      "food_name": "Pan integral con hummus y rodajas de pepino",
      "food_category": "Grano",
      "image_url":mealImages.panIntegral,
      "calories": 340
    },
    {
      "day_of_week": "FRIDAY",
      "time_of_day": "13:00:00",
      "food_name": "Ensalada de garbanzos con tomate, cebolla y aguacate",
      "food_category": "Vegetal",
      "image_url":mealImages.ensalada,
      "calories": 510
    },
    {
      "day_of_week": "FRIDAY",
      "time_of_day": "20:00:00",
      "food_name": "Verduras al horno con filete de pescado blanco",
      "food_category": "Proteína",
      "image_url":mealImages.filetePescadoVerduras,
      "calories": 430
    },
    {
      "day_of_week": "SATURDAY",
      "time_of_day": "08:00:00",
      "food_name": "Avena con manzana rallada y canela",
      "food_category": "Grano",
      "image_url":mealImages.avenaConManzanaCanela,
      "calories": 350
    },
    {
      "day_of_week": "SATURDAY",
      "time_of_day": "13:00:00",
      "food_name": "Pollo a la plancha con pure",
      "food_category": "Proteína",
      "image_url":mealImages.polloPure,
      "calories": 450
    },
    {
      "day_of_week": "SATURDAY",
      "time_of_day": "20:00:00",
      "food_name": "Sopa de calabaza con semillas de girasol",
      "food_category": "Vegetal",
      "image_url":mealImages.sopaVerdurasPescado,
      "calories": 440
    },
    {
      "day_of_week": "SUNDAY",
      "time_of_day": "08:00:00",
      "food_name": "Tostadas integrales con aguacate y huevo cocido",
      "food_category": "Grano",
      "image_url":mealImages.tostadasPaltaHuevo,
      "calories": 350
    },
    {
      "day_of_week": "SUNDAY",
      "time_of_day": "13:00:00",
      "food_name": "Ensalada de legumbres con aceite de oliva y salmón",
      "food_category": "Proteína",
      "image_url":mealImages.ensalada,
      "calories": 500
    },
    {
      "day_of_week": "SUNDAY",
      "time_of_day": "20:00:00",
      "food_name": "Verduras al vapor con tofu y arroz integral",
      "food_category": "Vegetal",
      "image_url":mealImages.ensalada,
      "calories": 450
    }
  ]
},
{
  id: "7",
  name: "Dieta Vegetariana",
  description: "Plan equilibrado sin productos cárnicos, basado en proteínas vegetales.",
  meals: [
    {
      day_of_week: "MONDAY",
      time_of_day: "08:00:00",
      food_name: "Avena con leche de almendra, nueces y banana",
      food_category: "Grano",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 350
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "13:00:00",
      food_name: "Hamburguesa de lentejas con ensalada de rúcula y zanahoria",
      food_category: "Proteína",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 480
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "20:00:00",
      food_name: "Tortilla de papa y cebolla",
      food_category: "Vegetal",
      image_url: mealImages.tortilla,
      calories: 500
    },

    {
      day_of_week: "TUESDAY",
      time_of_day: "08:00:00",
      food_name: "Tostadas integrales con palta y tomate cherry",
      food_category: "Grano",
      image_url: mealImages.tostadasPaltaTomate,
      calories: 340
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "13:00:00",
      food_name: "Ensalada de quinoa con garbanzos, pepino y pimientos",
      food_category: "Proteína",
      image_url: mealImages.ensalada,
      calories: 470
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "20:00:00",
      food_name: "Tortilla de papa y cebolla",
      food_category: "Vegetal",
      image_url: mealImages.tortilla,
      calories: 500
    },

    {
      day_of_week: "WEDNESDAY",
      time_of_day: "08:00:00",
      food_name: "Yogur vegetal con semillas de chía y frutas frescas",
      food_category: "Lácteo",
      image_url: mealImages.yogurFrutillaChia,
      calories: 360
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "13:00:00",
      food_name: "Hamburguesa de lentejas con ensalada de rúcula y zanahoria",
      food_category: "Proteína",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 480
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "20:00:00",
      food_name: "Pasta integral con salsa de tomate y champiñones",
      food_category: "Grano",
      image_url: mealImages.pastaCarneBrocoli,
      calories: 510
    },

    {
      day_of_week: "THURSDAY",
      time_of_day: "08:00:00",
      food_name: "Smoothie de avena, plátano y leche vegetal",
      food_category: "Fruta",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 330
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "13:00:00",
      food_name: "Hamburguesa de lentejas con ensalada de rúcula y zanahoria",
      food_category: "Proteína",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 480
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "20:00:00",
      food_name: "Tortilla de papa y cebolla",
      food_category: "Vegetal",
      image_url: mealImages.tortilla,
      calories: 500
    },

    {
      day_of_week: "FRIDAY",
      time_of_day: "08:00:00",
      food_name: "Pan integral con aguacate y tomate",
      food_category: "Grano",
      image_url: mealImages.panIntegral,
      calories: 340
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "13:00:00",
      food_name: "Ensalada de garbanzos con verduras frescas y aceitunas",
      food_category: "Proteína",
      image_url: mealImages.ensalada,
      calories: 480
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "20:00:00",
      food_name: "Curry de verduras con arroz basmati",
      food_category: "Vegetal",
      image_url: mealImages.arrozPolloVerduras,
      calories: 520
    },

    {
      day_of_week: "SATURDAY",
      time_of_day: "08:00:00",
      food_name: "Avena con leche, plátano y canela",
      food_category: "Grano",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 350
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "13:00:00",
      food_name: "Hamburguesa de garbanzos con ensalada de col",
      food_category: "Proteína",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 470
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "20:00:00",
      food_name: "Pizza vegetariana con base de coliflor y verduras",
      food_category: "Grano",
      image_url: mealImages.pizzaCarneHuevo,
      calories: 500
    },

    {
      day_of_week: "SUNDAY",
      time_of_day: "08:00:00",
      food_name: "Tostadas integrales con palta y tomate",
      food_category: "Grano",
      image_url: mealImages.tostadasPaltaTomate,
      calories: 360
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "13:00:00",
      food_name: "Hamburguesa de lentejas con ensalada de rúcula y zanahoria",
      food_category: "Proteína",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 480
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "20:00:00",
      food_name: "Tortilla de papa y cebolla",
      food_category: "Vegetal",
      image_url: mealImages.tortilla,
      calories: 500
    }
  ]
},
{
  id: "8",
  name: "Dieta Libre de Gluten",
  description: "Excluye el gluten, con alternativas ricas en nutrientes y sin riesgo para celíacos.",
  meals: [
    // LUNES
    {
      day_of_week: "MONDAY",
      time_of_day: "08:00:00",
      food_name: "Yogur con frutilla y semillas de chía",
      food_category: "Lácteo",
      image_url: mealImages.yogurFrutillaChia,
      calories: 320
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "13:00:00",
      food_name: "Pollo a la plancha con puré de papas",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 450
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "20:00:00",
      food_name: "Pasta de arroz con carne y brócoli",
      food_category: "Grano",
      image_url: mealImages.pastaCarneBrocoli,
      calories: 500
    },

    // MARTES
    {
      day_of_week: "TUESDAY",
      time_of_day: "08:00:00",
      food_name: "Licuado de avena y banana sin gluten",
      food_category: "Fruta",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 330
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "13:00:00",
      food_name: "Ensalada de pollo, vegetales y quinoa",
      food_category: "Grano",
      image_url: mealImages.ensaladaPolloVegetales,
      calories: 460
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "20:00:00",
      food_name: "Avena con manzana rallada y canela",
      food_category: "Grano",
      image_url: mealImages.avenaConManzanaCanela,
      calories: 370
    },

    // MIÉRCOLES
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "08:00:00",
      food_name: "Tostadas sin gluten con manteca y mermelada",
      food_category: "Grano",
      image_url: mealImages.tostadasMantecaMermelada,
      calories: 340
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "13:00:00",
      food_name: "Pollo grillado con puré de papas",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 470
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "20:00:00",
      food_name: "Sopa de verduras y pescado blanco",
      food_category: "Vegetal",
      image_url: mealImages.sopaVerdurasPescado,
      calories: 480
    },

    // JUEVES
    {
      day_of_week: "THURSDAY",
      time_of_day: "08:00:00",
      food_name: "Avena con manzana y canela",
      food_category: "Grano",
      image_url: mealImages.avenaConManzanaCanela,
      calories: 370
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "13:00:00",
      food_name: "Ensalada de quinoa con vegetales y pollo",
      food_category: "Vegetal",
      image_url: mealImages.ensaladaPolloVegetales,
      calories: 460
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "20:00:00",
      food_name: "Pollo con puré de papas",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 480
    },

    // VIERNES
    {
      day_of_week: "FRIDAY",
      time_of_day: "08:00:00",
      food_name: "Licuado de avena, banana y leche vegetal",
      food_category: "Fruta",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 330
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "13:00:00",
      food_name: "Pasta sin gluten con carne y brócoli",
      food_category: "Grano",
      image_url: mealImages.pastaCarneBrocoli,
      calories: 470
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "20:00:00",
      food_name: "Ensalada de pollo con vegetales frescos",
      food_category: "Vegetal",
      image_url: mealImages.ensaladaPolloVegetales,
      calories: 460
    },

    // SÁBADO
    {
      day_of_week: "SATURDAY",
      time_of_day: "08:00:00",
      food_name: "Tostadas sin gluten con manteca y mermelada",
      food_category: "Grano",
      image_url: mealImages.tostadasMantecaMermelada,
      calories: 340
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "13:00:00",
      food_name: "Pollo grillado con puré",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 450
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "20:00:00",
      food_name: "Pasta de arroz con carne y brócoli",
      food_category: "Grano",
      image_url: mealImages.pastaCarneBrocoli,
      calories: 500
    },

    // DOMINGO
    {
      day_of_week: "SUNDAY",
      time_of_day: "08:00:00",
      food_name: "Yogur con frutilla y semillas de chía",
      food_category: "Lácteo",
      image_url: mealImages.yogurFrutillaChia,
      calories: 320
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "13:00:00",
      food_name: "Ensalada de pollo y quinoa",
      food_category: "Grano",
      image_url: mealImages.ensaladaPolloVegetales,
      calories: 460
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "20:00:00",
      food_name: "Avena con manzana rallada y canela",
      food_category: "Vegetal",
      image_url: mealImages.avenaConManzanaCanela,
      calories: 370
    }
  ]
},
{
  id: "9",
  name: "Dieta Cetogénica",
  description: "Alta en grasas buenas y baja en carbohidratos para inducir cetosis.",
  meals: [
    // LUNES
    {
      day_of_week: "MONDAY",
      time_of_day: "08:00:00",
      food_name: "Huevos revueltos con espinaca y tocino",
      food_category: "Proteína",
      image_url: mealImages.huevosEspinaca,
      calories: 420
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "13:00:00",
      food_name: "Pechuga de pollo con puré",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 450
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "20:00:00",
      food_name: "Hamburguesa con queso y papas",
      food_category: "Proteína",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 600
    },

    // MARTES
    {
      day_of_week: "TUESDAY",
      time_of_day: "08:00:00",
      food_name: "Yogur natural con frutas frescas y semillas de chía",
      food_category: "Lácteo",
      image_url: mealImages.yogurFrutillaChia,
      calories: 320
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "13:00:00",
      food_name: "Ensalada de pollo con huevo duro y aguacate",
      food_category: "Proteína",
      image_url: mealImages.ensaladaPolloVegetales,
      calories: 540
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "20:00:00",
      food_name: "Pechuga de pollo con puré",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 610
    },

    // MIÉRCOLES
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "08:00:00",
      food_name: "Smoothie de aguacate con leche de almendras",
      food_category: "Graso",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 390
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "13:00:00",
      food_name: "Pechuga de pollo con puré",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 450
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "20:00:00",
      food_name: "Huevos revueltos con espinaca y tocino",
      food_category: "Proteína",
      image_url: mealImages.huevosEspinaca,
      calories: 420
    },

    // JUEVES
    {
      day_of_week: "THURSDAY",
      time_of_day: "08:00:00",
      food_name: "Batido helado de crema de maní y chocolate amargo",
      food_category: "Graso",
      image_url: mealImages.batidoHeladoMantequilla,
      calories: 460
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "13:00:00",
      food_name: "Ensalada de atún con vegetales sin almidón",
      food_category: "Proteína",
      image_url: mealImages.ensaladaPolloVegetales,
      calories: 530
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "20:00:00",
      food_name: "Hamburguesa con queso y papas",
      food_category: "Proteína",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 600
    },

    // VIERNES
    {
      day_of_week: "FRIDAY",
      time_of_day: "08:00:00",
      food_name: "Huevos pochados con aguacate",
      food_category: "Proteína",
      image_url: mealImages.huevosEspinaca,
      calories: 400
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "13:00:00",
      food_name: "Pollo al curry con arroz de coliflor",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 480
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "20:00:00",
      food_name: "Pechuga de pollo con puré",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 610
    },

    // SÁBADO
    {
      day_of_week: "SATURDAY",
      time_of_day: "08:00:00",
      food_name: "Yogur griego con nueces y semillas",
      food_category: "Lácteo",
      image_url: mealImages.yogurFrutillaChia,
      calories: 360
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "13:00:00",
      food_name: "Ensalada de pollo con palta y espinaca",
      food_category: "Proteína",
      image_url: mealImages.ensaladaPolloVegetales,
      calories: 520
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "20:00:00",
      food_name: "Huevos revueltos con espinaca y tocino",
      food_category: "Proteína",
      image_url: mealImages.huevosEspinaca,
      calories: 420
    },

    // DOMINGO
    {
      day_of_week: "SUNDAY",
      time_of_day: "08:00:00",
      food_name: "Licuado de leche de coco, espinaca y frutos rojos",
      food_category: "Graso",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 390
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "13:00:00",
      food_name: "Pechuga de pollo con puré",
      food_category: "Proteína",
      image_url: mealImages.polloPure,
      calories: 450
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "20:00:00",
      food_name: "Hamburguesa con queso y vegetales",
      food_category: "Proteína",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 600
    }
  ]
},
{
  id: "10",
  name: "Dieta para Volumen Saludable",
  description: "Incrementa masa muscular con enfoque en calidad nutricional.",
  meals: [
    // LUNES
    {
      day_of_week: "MONDAY",
      time_of_day: "08:00:00",
      food_name: "Avena con leche, almendras y rodajas de banana",
      food_category: "Grano",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 400
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "13:00:00",
      food_name: "Arroz integral con pollo, palta y vegetales",
      food_category: "Proteína",
      image_url: mealImages.arrozPolloVerduras,
      calories: 750
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "17:00:00",
      food_name: "Batido de proteínas con avena y banana",
      food_category: "Proteína",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 450
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "20:00:00",
      food_name: "Pasta integral con carne magra y brócoli",
      food_category: "Grano",
      image_url: mealImages.pastaCarneBrocoli,
      calories: 700
    },

    // MARTES
    {
      day_of_week: "TUESDAY",
      time_of_day: "08:00:00",
      food_name: "Tostadas integrales con aguacate y huevo",
      food_category: "Grano",
      image_url: mealImages.tostadasPaltaHuevo,
      calories: 420
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "13:00:00",
      food_name: "Ensalada de quinoa con pollo, palta y tomates cherry",
      food_category: "Proteína",
      image_url: mealImages.ensaladaPolloVegetales,
      calories: 740
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "17:00:00",
      food_name: "Yogur griego con avena y frutos rojos",
      food_category: "Lácteo",
      image_url: mealImages.yogurGriego,
      calories: 460
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "20:00:00",
      food_name: "Pasta integral con carne magra y brócoli",
      food_category: "Grano",
      image_url: mealImages.pastaCarneBrocoli,
      calories: 700
    },

    // MIÉRCOLES
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "08:00:00",
      food_name: "Tostadas integrales con aguacate y huevo",
      food_category: "Proteína",
      image_url: mealImages.tostadasPaltaHuevo,
      calories: 420
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "13:00:00",
      food_name: "Arroz integral con pollo, palta y vegetales",
      food_category: "Proteína",
      image_url: mealImages.arrozPolloVerduras,
      calories: 750
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "17:00:00",
      food_name: "Batido de proteínas con avena y banana",
      food_category: "Proteína",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 450
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "20:00:00",
      food_name: "Pasta integral con carne magra y brócoli",
      food_category: "Grano",
      image_url: mealImages.pastaCarneBrocoli,
      calories: 700
    },

    // JUEVES
    {
      day_of_week: "THURSDAY",
      time_of_day: "08:00:00",
      food_name: "Smoothie de banana con mantequilla de maní y avena",
      food_category: "Graso",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 400
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "13:00:00",
      food_name: "Arroz integral con pollo, palta y vegetales",
      food_category: "Proteína",
      image_url: mealImages.arrozPolloVerduras,
      calories: 750
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "17:00:00",
      food_name: "Yogur griego con avena y frutos rojos",
      food_category: "Lácteo",
      image_url: mealImages.yogurGriego,
      calories: 460
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "20:00:00",
      food_name: "Pasta integral con carne magra y brócoli",
      food_category: "Grano",
      image_url: mealImages.pastaCarneBrocoli,
      calories: 700
    },

    // VIERNES
    {
      day_of_week: "FRIDAY",
      time_of_day: "08:00:00",
      food_name: "Tostadas integrales con aguacate y huevo",
      food_category: "Grano",
      image_url: mealImages.tostadasPaltaHuevo,
      calories: 420
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "13:00:00",
      food_name: "Arroz integral con pollo, palta y vegetales",
      food_category: "Proteína",
      image_url: mealImages.arrozPolloVerduras,
      calories: 750
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "17:00:00",
      food_name: "Batido de proteínas con avena y banana",
      food_category: "Proteína",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 450
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "20:00:00",
      food_name: "Pasta integral con carne magra y brócoli",
      food_category: "Grano",
      image_url: mealImages.pastaCarneBrocoli,
      calories: 700
    },

    // SÁBADO
    {
      day_of_week: "SATURDAY",
      time_of_day: "08:00:00",
      food_name: "Avena con leche, nueces y rodajas de plátano",
      food_category: "Grano",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 400
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "13:00:00",
      food_name: "Ensalada de quinoa con pollo, palta y tomates cherry",
      food_category: "Proteína",
      image_url: mealImages.ensaladaPolloVegetales,
      calories: 740
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "17:00:00",
      food_name: "Yogur griego con avena y frutos rojos",
      food_category: "Lácteo",
      image_url: mealImages.yogurGriego,
      calories: 460
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "20:00:00",
      food_name: "Pasta integral con carne magra y brócoli",
      food_category: "Grano",
      image_url: mealImages.pastaCarneBrocoli,
      calories: 700
    },

    // DOMINGO
    {
      day_of_week: "SUNDAY",
      time_of_day: "08:00:00",
      food_name: "Tostadas integrales con aguacate y huevo",
      food_category: "Grano",
      image_url: mealImages.tostadasPaltaHuevo,
      calories: 420
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "13:00:00",
      food_name: "Arroz integral con pollo, palta y vegetales",
      food_category: "Proteína",
      image_url: mealImages.arrozPolloVerduras,
      calories: 750
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "17:00:00",
      food_name: "Batido de proteínas con avena y banana",
      food_category: "Proteína",
      image_url: mealImages.licuadoAvenaBanana,
      calories: 450
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "20:00:00",
      food_name: "Pasta integral con carne magra y brócoli",
      food_category: "Grano",
      image_url: mealImages.pastaCarneBrocoli,
      calories: 700
    }
  ]
},
{
  id: "11",
  name: "Dieta para Volumen Sucio",
  description: "Alta en calorías con menos restricción para ganar peso rápidamente.",
  meals: [
    // LUNES
    {
      day_of_week: "MONDAY",
      time_of_day: "08:00:00",
      food_name: "Tostadas con manteca y mermelada",
      food_category: "Graso",
      image_url: mealImages.tostadasMantecaMermelada,
      calories: 500
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "13:00:00",
      food_name: "Hamburguesas caseras con papas y queso",
      food_category: "Graso",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 950
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "17:00:00",
      food_name: "Batido con leche entera, helado y mantequilla de maní",
      food_category: "Lácteo",
      image_url: mealImages.batidoHeladoMantequilla,
      calories: 600
    },
    {
      day_of_week: "MONDAY",
      time_of_day: "20:00:00",
      food_name: "Pizza casera con carne, queso y huevo",
      food_category: "Graso",
      image_url: mealImages.pizzaCarneHuevo,
      calories: 900
    },

    // MARTES
    {
      day_of_week: "TUESDAY",
      time_of_day: "08:00:00",
      food_name: "Café con leche y facturas",
      food_category: "Dulces",
      image_url: mealImages.cafeFacturas,
      calories: 520
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "13:00:00",
      food_name: "Hamburguesas caseras con papas y queso",
      food_category: "Graso",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 950
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "17:00:00",
      food_name: "Batido con leche entera, helado y mantequilla de maní",
      food_category: "Lácteo",
      image_url: mealImages.batidoHeladoMantequilla,
      calories: 600
    },
    {
      day_of_week: "TUESDAY",
      time_of_day: "20:00:00",
      food_name: "Pizza casera con carne, queso y huevo",
      food_category: "Graso",
      image_url: mealImages.pizzaCarneHuevo,
      calories: 900
    },

    // MIÉRCOLES
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "08:00:00",
      food_name: "Tostadas con manteca y mermelada",
      food_category: "Graso",
      image_url: mealImages.tostadasMantecaMermelada,
      calories: 500
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "13:00:00",
      food_name: "Hamburguesas caseras con papas y queso",
      food_category: "Graso",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 950
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "17:00:00",
      food_name: "Batido con leche entera, helado y mantequilla de maní",
      food_category: "Lácteo",
      image_url: mealImages.batidoHeladoMantequilla,
      calories: 600
    },
    {
      day_of_week: "WEDNESDAY",
      time_of_day: "20:00:00",
      food_name: "Pizza casera con carne, queso y huevo",
      food_category: "Graso",
      image_url: mealImages.pizzaCarneHuevo,
      calories: 900
    },

    // JUEVES
    {
      day_of_week: "THURSDAY",
      time_of_day: "08:00:00",
      food_name: "Medialunas con café con leche",
      food_category: "Dulces",
      image_url: mealImages.cafeFacturas,
      calories: 530
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "13:00:00",
      food_name: "Hamburguesas caseras con papas y queso",
      food_category: "Graso",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 950
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "17:00:00",
      food_name: "Batido con leche entera, helado y mantequilla de maní",
      food_category: "Lácteo",
      image_url: mealImages.batidoHeladoMantequilla,
      calories: 600
    },
    {
      day_of_week: "THURSDAY",
      time_of_day: "20:00:00",
      food_name: "Pizza casera con carne, queso y huevo",
      food_category: "Graso",
      image_url: mealImages.pizzaCarneHuevo,
      calories: 900
    },

    // VIERNES
    {
      day_of_week: "FRIDAY",
      time_of_day: "08:00:00",
      food_name: "Tostadas con manteca y mermelada",
      food_category: "Graso",
      image_url: mealImages.tostadasMantecaMermelada,
      calories: 500
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "13:00:00",
      food_name: "Hamburguesas caseras con papas y queso",
      food_category: "Graso",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 950
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "17:00:00",
      food_name: "Batido con leche entera, helado y mantequilla de maní",
      food_category: "Lácteo",
      image_url: mealImages.batidoHeladoMantequilla,
      calories: 600
    },
    {
      day_of_week: "FRIDAY",
      time_of_day: "20:00:00",
      food_name: "Pizza casera con carne, queso y huevo",
      food_category: "Graso",
      image_url: mealImages.pizzaCarneHuevo,
      calories: 900
    },

    // SÁBADO
    {
      day_of_week: "SATURDAY",
      time_of_day: "08:00:00",
      food_name: "Tostadas con manteca y mermelada",
      food_category: "Graso",
      image_url: mealImages.tostadasMantecaMermelada,
      calories: 500
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "13:00:00",
      food_name: "Hamburguesas caseras con papas y queso",
      food_category: "Graso",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 950
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "17:00:00",
      food_name: "Batido con leche entera, helado y mantequilla de maní",
      food_category: "Lácteo",
      image_url: mealImages.batidoHeladoMantequilla,
      calories: 600
    },
    {
      day_of_week: "SATURDAY",
      time_of_day: "20:00:00",
      food_name: "Pizza casera con carne, queso y huevo",
      food_category: "Graso",
      image_url: mealImages.pizzaCarneHuevo,
      calories: 900
    },

    // DOMINGO
    {
      day_of_week: "SUNDAY",
      time_of_day: "08:00:00",
      food_name: "Facturas con café con leche",
      food_category: "Dulces",
      image_url: mealImages.cafeFacturas,
      calories: 520
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "13:00:00",
      food_name: "Hamburguesas caseras con papas y queso",
      food_category: "Graso",
      image_url: mealImages.hamburguesaQuesoPapas,
      calories: 950
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "17:00:00",
      food_name: "Batido con leche entera, helado y mantequilla de maní",
      food_category: "Lácteo",
      image_url: mealImages.batidoHeladoMantequilla,
      calories: 600
    },
    {
      day_of_week: "SUNDAY",
      time_of_day: "20:00:00",
      food_name: "Pizza casera con carne, queso y huevo",
      food_category: "Graso",
      image_url: mealImages.pizzaCarneHuevo,
      calories: 900
    }
  ]
}
];