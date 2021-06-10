import React from 'react'
import { Card } from 'antd'
import { StarFilled } from '@ant-design/icons'
import classNames from 'classnames'
import { timeSince, currencyFormat } from '../../util'

import styles from './productCard.module.scss'

const ProductCard = (props) => {
  const {
    className,
    imgUrl,
    title,
    createDate,
    price,
    vote,
  } = props
  const cx = classNames(styles['root'], className)

  const renderBody = () => {
    const date = new Date(createDate)
    const timeAgo = timeSince(date)
    const currency = currencyFormat(price)

    return (
      <>
        <div className={styles['title']}>{title}</div>
        <div className={styles['createDate']}>
          {timeAgo}
        </div>
        <div className={styles['star-container']}>
          {Array(vote)
            .fill(1)
            .map((m, key) => (
              <StarFilled key={key} />
            ))}
        </div>
        <div className={styles['price']}>{currency}</div>
      </>
    )
  }

  return (
    <Card
      className={cx}
      bordered={false}
      hoverable
      cover={<img alt="cover" src={imgUrl} />}>
      {renderBody()}
    </Card>
  )
}

export default ProductCard
