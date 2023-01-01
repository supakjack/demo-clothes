declare type Subscribe = 'month' | 'year'
declare type Icon = 'IconMarketing'
declare type Role = 'user' | 'admin'

declare interface PlanList {
  description: string
  icon?: object
}

declare interface Plan {
  name: string
  description: string
  price: string
  subscribe: Subscribe
  lists: Array<PlanList>
}

declare interface Process {
  icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}>
  title: string
  subtitle: string
}

declare interface Member {
  name: string
  position: string
  about: string
}
