# СustomCheckbox

Кастомный checkbox на основе [Material-UI](https://github.com/mui-org/material-ui)

## Props

| Name | type | Default | Description |
| ------ | ------ | ------ | ------ |
| id | string | | Используется как стандартный тег id. Обязательный. |
| className | string | |Используется как стандартный тег id |
| lable | string | | Используется для подписи checkbox'а. Располагается слева от элемента|
| checkboxStatus | boolean | false | Устанавливает значение для checked |
| onClick | (e:any) => void | Работает как старнартный тег onClick |
| onChange | (e:any) => void | Работает как старнартный тег onChange |
| checkedStyle | 'opaque' or null | null | Устанавливает стиль checkbox'а в положении checked. Имеет две форма: заполненный при значении 'opaque'и без заполнеия при дефолтном значении |

```sh
 <СustomCheckbox
  id='1'
  label='checked с заполнением'
  checkboxStatus
  onClick={checkboxesHandler}
  checkedStyle='opaque'
/>
<СustomCheckbox
  id='1'
  label='checked={false} с заполнением'
  onClick={checkboxesHandler}
  checkedStyle='opaque'
/>
<СustomCheckbox
  id='3'
  label='checked={false} с без заполнением'
  checkboxStatus
  onClick={checkboxesHandler}
/>
<СustomCheckbox
  id='2'
  label='checked={false} с без заполнением'
  onClick={checkboxesHandler}
/>
```

