import React, { useState } from 'react'
import { Row, Col, Pagination } from 'antd'
import classNames from 'classnames'
import { items } from '../../mock/items'
import ProductCard from '../productCard'

import styles from './home.module.scss'

const Home = (props) => {
  const { className } = props
  const [currentPage, setCurrentPage] = useState()
  const cx = classNames(styles['root'], className)

  // const renderPagination = (
  //   current,
  //   type,
  //   originalElement,
  // ) => {
  //   console.log({ current, type, originalElement })
  // }

  return (
    <div className={cx}>
      <Row className={styles['section']}>
        <Col
          span={24}
          className={
            styles['items-count']
          }>{`Items 1-${items.length} of ${items.length}`}</Col>
      </Row>
      <Row
        className={styles['section']}
        gutter={[
          { xs: 8, sm: 8, md: 16, xl: 24 },
          { xs: 8, sm: 8, md: 16, xl: 24 },
        ]}>
        {items.length &&
          items.map((item) => (
            <Col
              key={item.id}
              xs={24}
              sm={12}
              md={8}
              xxl={6}>
              <ProductCard
                title={item.title}
                imgUrl={item.image_url}
                createDate={item.created_at}
                price={item.price}
                vote={item.vote}
              />
            </Col>
          ))}
      </Row>
      <Row className={styles['section']}>
        <Col span={24} className={styles['pagination']}>
          <Pagination defaultCurrent={1} total={50} />
        </Col>
      </Row>
    </div>
  )
}

export default Home
