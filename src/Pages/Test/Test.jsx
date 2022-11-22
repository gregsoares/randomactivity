import React, { useEffect } from 'react'
import boredAPI from '../../util/boredAPI'

const pathName = window.location.pathname

const Test = () => {
  const [activityList, setActivityList] = React.useState([])
  const handleGetActivity = async () => {
    const data = await boredAPI()
    console.log('handleActivity::res :>> ', data)
    setActivityList([...activityList, data])
  }

  const renderActivity = (activity, index) =>
    activity && (
      <div key={index} className='p-2 bg-slate-200 shadow-md rounded-md m-1'>
        {activity.activity && <p>Activity: {activity.activity}</p>}
        {activity.type && <p>Type: {activity.type}</p>}
        {activity.participants && <p>Participants: {activity.participants}</p>}
        {activity.price && <p>Price: {activity.price}</p>}
        {activity.link && <p>Link: {activity.link}</p>}
      </div>
    )

  useEffect(() => {
    boredAPI().then(res => {
      console.log('handleActivity::res :>> ', res)
      setActivityList([...activityList, res])
    })
  }, [])

  useEffect(() => {
    console.log('useEffect::activityList: ', activityList)
  }, [activityList])

  return (
    <div>
      Test <p className='text-xl'>pathname: {pathName}</p>{' '}
      <section id='API-Controls'>
        <button onClick={handleGetActivity} className='p-2 m-2 bg-slate-600'>
          {' '}
          Get Activity{' '}
        </button>
        {activityList.map((activity, index) => renderActivity(activity, index))}
      </section>
    </div>
  )
}

export default Test
