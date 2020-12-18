import React from 'react'
import "./Home.css"
import Banner from "./Banner"
import Card from "./Card"

function Home() {
    return (
        <div className="home">
            <Banner />
            
            {/* card section */}

            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="$130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="$350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$70/night"
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://images.unsplash.com/photo-1571247865791-9d7ed2ddf033?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="$230/night"
            />
            <Card
                src="https://images.unsplash.com/photo-1521782462922-9318be1cfd04?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=720&q=80"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="$250/night"
            />
            <Card
                src="https://images.unsplash.com/photo-1601002257790-ebe0966a85ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="$250/night"
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=720&q=80"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="$215/night"
            />
            <Card
                src="https://images.unsplash.com/photo-1560448204-61dc36dc98c8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=720&q=80"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="$200/night"
            />
            <Card
                src="https://images.unsplash.com/photo-1539922631499-09155cc609a4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=720&q=80"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="$250/night"
            />
            </div>
        </div>
    )
}

export default Home

// rfce