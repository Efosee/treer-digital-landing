import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

export const SERVICES = [
  { 
    title: "Разработка ПО под ключ", 
    desc: "Полный цикл создания программного обеспечения: от анализа бизнес-задачи и проектирования архитектуры до разработки, тестирования и запуска продукта.",
    icon: <CodeIcon className="service__icon" />
  },
  { 
    title: "UI/UX дизайн", 
    desc: "Создаем понятные, стильные и конверсионные интерфейсы. Проводим UX-исследования и прототипирование для максимального удобства пользователей.",
    icon: <PaletteIcon className="service__icon" />
  },
  { 
    title: "Системное проектирование", 
    desc: "Прорабатываем архитектуру и логику приложений с учетом масштабируемости. Выбираем оптимальный технологический стек под задачи бизнеса.",
    icon: <AccountTreeIcon className="service__icon" />
  },
  { 
    title: "Веб-приложения", 
    desc: "Разрабатываем современные веб-приложения на React, Vue, Angular с адаптивным дизайном и высокой производительностью.",
    icon: <LanguageIcon className="service__icon" />
  },
  { 
    title: "Мобильные приложения", 
    desc: "Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android с безупречным UX.",
    icon: <PhoneAndroidIcon className="service__icon" />
  },
  { 
    title: "Интеграции и API", 
    desc: "Интегрируем сторонние сервисы, разрабатываем собственные API, настраиваем взаимодействие систем для автоматизации процессов.",
    icon: <IntegrationInstructionsIcon className="service__icon" />
  }
];