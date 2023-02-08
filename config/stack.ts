import { Colors } from './colors';

export enum Stack {
  // Languages
  python,
  java,
  csharp,
  r,
  typescript,
  javascript,
  bash,
  powershell,
  cpp,
  vbnet,
  matlab,
  latex,
  go,
  
  // Frontend
  react,
  reactnative,
  web,

  // Backend
  graphql,
  node,
  django,

  // Cloud
  aws,
  gcp,
  azure,

  // Messaging
  nats,
  kafka,

  // Databases
  arangodb,
  redis,
  postgres,
  mongo,
  mssql,

  // Tools
  docker,
  kubernetes,
  jenkins,
  terraform,
  git,
  
  // Frameworks
  scikit,
  tensorflow,
  pytorch,
}

export const WorkStack = [
  Stack.python,
  Stack.java,
  Stack.csharp,
  Stack.r,
  Stack.cpp,
  Stack.bash,
  Stack.powershell,
  Stack.vbnet,
  Stack.matlab,
  Stack.latex,
  Stack.typescript,
  Stack.javascript,
  Stack.react,
  Stack.reactnative,
  Stack.aws,
  Stack.gcp,
  Stack.azure,
  Stack.kubernetes,
  Stack.jenkins,
  Stack.docker,
  Stack.terraform,
  Stack.git,
  Stack.nats,
  Stack.kafka,
  Stack.graphql,
  Stack.postgres,
  Stack.redis,
  Stack.mongo,
  Stack.arangodb,
  Stack.mssql,
  Stack.web,
  Stack.tensorflow,
  Stack.pytorch,
  Stack.scikit,
  Stack.node,
  Stack.django,
  Stack.go,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.java]: {
    value: 'Java',
    color: Colors.java,
  },
  [Stack.csharp]: {
    value: 'C#',
    color: Colors.csharp,
  },
  [Stack.r]: {
    value: 'R',
    color: Colors.r,
  },
  [Stack.cpp]: {
    value: 'C/CPP',
    color: Colors.cpp,
  },
  [Stack.bash]: {
    value: 'Bash',
    color: Colors.bash,
  },
  [Stack.powershell]: {
    value: 'Powershell',
    color: Colors.powershell,
  },
  [Stack.vbnet]: {
    value: 'VB.NET',
    color: Colors.vbnet,
  },
  [Stack.matlab]: {
    value: 'MATLAB',
    color: Colors.matlab,
  },
  [Stack.latex]: {
    value: 'LaTeX',
    color: Colors.latex,
  },
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.reactnative]: {
    value: 'React Native',
    color: Colors.reactnative,
  },
  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },
  [Stack.gcp]: {
    value: 'Google Cloud',
    color: Colors.gcp,
  },
  [Stack.azure]: {
    value: 'Azure',
    color: Colors.azure,
  },
  [Stack.kubernetes]: {
    value: 'Kubernetes',
    color: Colors.kubernetes,
  },
  [Stack.jenkins]: {
    value: 'Jenkins',
    color: Colors.jenkins,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.terraform]: {
    value: 'Terraform',
    color: Colors.terraform,
  },
  [Stack.git]: {
    value: 'Git',
    color: Colors.git,
  },
  [Stack.nats]: {
    value: 'NATS',
    color: Colors.nats,
  },
  [Stack.kafka]: {
    value: 'Kafka',
    color: Colors.kafka,
  },
  [Stack.graphql]: {
    value: 'GraphQL',
    color: Colors.graphql,
  },
  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },
  [Stack.redis]: {
    value: 'Redis',
    color: Colors.redis,
  },
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
  [Stack.arangodb]: {
    value: 'ArangoDB',
    color: Colors.arangodb,
  },
  [Stack.mssql]: {
    value: 'MS SQL',
    color: Colors.mssql,
  },
  [Stack.web]: {
    value: 'Web',
    color: Colors.web,
  },
  [Stack.tensorflow]: {
    value: 'TensorFlow',
    color: Colors.tensorflow,
  },
  [Stack.pytorch]: {
    value: 'Py Torch',
    color: Colors.pytorch,
  },
  [Stack.scikit]: {
    value: 'scikit-learn',
    color: Colors.scikit,
  },  
  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },
  [Stack.django]: {
    value: 'Django',
    color: Colors.django,
  },
};
