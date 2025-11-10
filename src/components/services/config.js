import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DevicesIcon from '@mui/icons-material/Devices';

import BuildCircleIcon from '@mui/icons-material/BuildCircle';

import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

export const SERVICES = [
  { 
    title: "Разработка ПО под ключ", 
    desc: "Полный цикл создания программного обеспечения: от анализа бизнес-задачи и проектирования архитектуры до разработки, тестирования и запуска продукта.",
    icon: CodeIcon 
  },
  { 
    title: "UI/UX дизайн", 
    desc: "Создаем понятные, стильные и конверсионные интерфейсы. Проводим UX-исследования и прототипирование для максимального удобства пользователей.",
    icon: PaletteIcon
  },
  { 
    title: "Системное проектирование", 
    desc: "Прорабатываем архитектуру и логику приложений с учетом масштабируемости. Выбираем оптимальный технологический стек под задачи бизнеса.",
    icon: AccountTreeIcon
  },
  { 
    title: "Веб и мобильные приложения", 
    desc: "Разрабатываем современные веб- и мобильные приложения с адаптивным дизайном и высоким уровнем производительности. Обеспечиваем безупречный UX и надёжную работу на всех платформах.",
    icon: DevicesIcon
  },
  { 
    title: "Сопровождение и поддержка систем", 
    desc: "Оказываем техническую поддержку, обновляем функционал и обеспечиваем стабильную работу ваших систем. Помогаем масштабировать решения под растущие потребности бизнеса.",
    icon: BuildCircleIcon
  },
  { 
    title: "Интеграции и API", 
    desc: "Интегрируем сторонние сервисы, разрабатываем собственные API, настраиваем взаимодействие систем для автоматизации процессов.",
    icon: IntegrationInstructionsIcon
  }
];