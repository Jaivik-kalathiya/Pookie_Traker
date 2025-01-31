import React from "react";
import Image from "next/image";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


import { Avatar } from "../components/ui/avatar";
import { Card, CardContent } from "../components/ui/card";

import Winning from "./winning";
import ScoreBoard from "./scoreboard";
import Weapon from "./weapon";

const playerData = [
    {
      img: "/../public/astra.png", // Updated path
      name: "K K",
      kills: 22,
      deaths: 17,
      assists: 10,
      kd: 1.3,
      ddPerRound: 47,
      hsPercentage: "29%",
      team: "A"
    },
    {
        img: "/../public/astra.png", // Updated path
      name: "BrainX",
      kills: 17,
      deaths: 23,
      assists: 12,
      kd: 0.7,
      ddPerRound: 9,
      hsPercentage: "13%",
      team: "A"
    },
    {
        img: "/../public/astra.png", // Updated path
      name: "Neel",
      kills: 20,
      deaths: 20,
      assists: 5,
      kd: 0.7,
      ddPerRound: -40,
      hsPercentage: "13%",
      team: "A"
    },
    {
      img: "/../public/astra.png", // Updated path
      name: "Glaciot214",
      kills: 15,
      deaths: 20,
      assists: 2,
      kd: 0.8,
      ddPerRound: -46,
      hsPercentage: "3%",
      team: "B"
    },

  ];


// const ValorantTable = () => {
//     const teamA = playerData.filter(player => player.team === "A");
//     const teamB = playerData.filter(player => player.team === "B");
  
//     return (
//       <>
//         <div>
//           <Card className="p-4 shadow-lg rounded-lg mt-10 w-3/4 mx-auto bg-[#111922] text-white">
//             <CardContent>
//               <Table className="min-w-full border-collapse bg-[rgba(17, 25, 34, 0.8)]">
//                 <TableHeader className="text-white">
//                   <TableRow >
                   
//                     <TableHead className="text-left">Team A</TableHead>
//                     <TableHead className="text-left">Name</TableHead>
//                     <TableHead className="text-left">Kills</TableHead>
//                     <TableHead className="text-left">Deaths</TableHead>
//                     <TableHead className="text-left">Assists</TableHead>
//                     <TableHead className="text-left">K/D</TableHead>
//                     <TableHead className="text-left">Damage Delta/R</TableHead>
//                     <TableHead className="text-left">HS%</TableHead>
                
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {teamA.map((player, index) => (
//                     <TableRow key={index} className="border-b hover:bg-[#1a2633]">
//                       <TableCell>
//                         <Avatar className="h-8 w-8">
//                           <Image
//                             src={player.img}
//                             alt={`Player ${index + 1}`}
//                             width={32}
//                             height={32}
//                             className="rounded-full"
//                           />
//                         </Avatar>
//                       </TableCell>
//                       <TableCell>{player.name}</TableCell>
//                       <TableCell>{player.kills}</TableCell>
//                       <TableCell>{player.deaths}</TableCell>
//                       <TableCell>{player.assists}</TableCell>
//                       <TableCell>{player.kd}</TableCell>
//                       <TableCell>{player.ddPerRound}</TableCell>
//                       <TableCell>{player.hsPercentage}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>
  
//           <Card className="p-4 shadow-lg rounded-lg mt-10 w-3/4 mx-auto bg-[#111922] text-white">
//             <CardContent>
//               <Table className="min-w-full border-collapse bg-[rgba(17, 25, 34, 0.8)]">
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead className="text-left">Team B</TableHead>
//                     <TableHead className="text-left">Name</TableHead>
//                     <TableHead className="text-left">Kills</TableHead>
//                     <TableHead className="text-left">Deaths</TableHead>
//                     <TableHead className="text-left">Assists</TableHead>
//                     <TableHead className="text-left">K/D</TableHead>
//                     <TableHead className="text-left">Damage Delta/R</TableHead>
//                     <TableHead className="text-left">HS%</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {teamB.map((player, index) => (
//                     <TableRow key={index} className="border-b hover:bg-[#1a2633]">
//                       <TableCell>
//                         <Avatar className="h-8 w-8">
//                           <Image
//                             src={player.img}
//                             alt={`Player ${index + 1}`}
//                             width={32}
//                             height={32}
//                             className="rounded-full"
//                           />
//                         </Avatar>
//                       </TableCell>
//                       <TableCell>{player.name}</TableCell>
//                       <TableCell>{player.kills}</TableCell>
//                       <TableCell>{player.deaths}</TableCell>
//                       <TableCell>{player.assists}</TableCell>
//                       <TableCell>{player.kd}</TableCell>
//                       <TableCell>{player.ddPerRound}</TableCell>
//                       <TableCell>{player.hsPercentage}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>
//         </div>
//       </>
//     );
//   };

const ValorantTable = () => {
    const teamA = playerData.filter(player => player.team === "A");
    const teamB = playerData.filter(player => player.team === "B");
  
    return (
      <>
    <div >
        <Winning/>
    </div>

      <div>
          <ScoreBoard/>
      </div>
    <div className="pb-8">
      <Weapon/>
    </div>
      
      </>
    );
  };

export default ValorantTable;
