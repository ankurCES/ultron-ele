/**
 * @2019/01/31
 */
import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

import styles from '../style/gallery.module.css'


const CategoryCard = ({cover, url, isMain, title, type}) => (
  <Link to={url} className={styles.darkenLink} 
    state={{ 
      imgPath: cover.childImageSharp.fluid.src, 
      title, 
      type,
     }}>
    <Image fluid={cover.childImageSharp.fluid}/>
    <h4 className={isMain?styles.mainCategoryTitle:styles.subCategoryTitle}>{title}</h4>
  </Link>
)

const Gallery = ({data}) => {

  // console.log(data)
  const ctgs = data.frontmatter.categories
  // console.log(ctgs)

  return (
      <div className={styles.gallery}>
      {/** 1st column */}
      <div className={styles.cateColumn}>
        {ctgs[0] && 
            <CategoryCard 
              url="/category/" isMain={true} 
              cover={ctgs[0].cover}
              title={ctgs[0].name} type="ds"/>
        }
      </div>
      {/** 2st column */}
      <div className={styles.cateColumn}>
        <div className={styles.cateColumnRowTop}>
          {ctgs[1] && 
              <CategoryCard 
                url="/category/" isMain={false} 
                cover={ctgs[1].cover}
                title={ctgs[1].name} type="ds"/>
          }
        </div>
        <div className={styles.cateColumnRow}>
          {ctgs[2] &&
              <CategoryCard 
                url="/category/" isMain={false} 
                cover={ctgs[2].cover}
                title={ctgs[2].name} type="ds"/>
          }
        </div>
      </div>
      {/** 3rd column*/}
      <div className={styles.cateColumn}>
        <div className={styles.cateColumnRowTop}>
          {ctgs[3] &&
              <CategoryCard 
                url="/category/" isMain={false} 
                cover={ctgs[3].cover}
                title={ctgs[3].name} type="ds"/>
          }
        </div>
        <div className={styles.cateColumnRow}>
          {ctgs[4] &&
              <CategoryCard 
                url="/category/" isMain={false} 
                cover={ctgs[4].cover}
                title={ctgs[4].name} type="ds"/>
          }
        </div>
      </div>
    </div>
  )
}

export default Gallery

