export type InputProps = {
    textarea: boolean,
    type: string,
    required: boolean,
    value: string,
    setValue: any,
    errorRequest: any,
    field: string,
    style: string
}

export type Project = {
  id: number,
  image: string,
  title: string,
  description: string,
  category: string,
  year: string,
}