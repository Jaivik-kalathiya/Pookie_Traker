import React from 'react'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Equal, Trophy } from 'lucide-react';
const Winning = () => {
    const matchResults = {
        teamA: [
          true, true, true, true, true, false, false, false, false, false, 
          false, false, true, true, false, false, false, false, false, true, 
          true, true, false, false
        ],
        teamB: [
          false, false, false, false, false, true, false, true, true, true,
          true, false, false, false, false, true, false, true, false, false,
          false, false, true, true
        ]
      };
    
      const teamAWinInd: any[] = [];
      const teamBWinInd: any[] = [];

      for (let i = 0; i < matchResults.teamA.length; i++) {
        if (matchResults.teamA[i] === true) {
          teamAWinInd.push(1);
        }else teamAWinInd.push(0);
      }
        for (let i = 0; i < matchResults.teamB.length; i++) {
            if (matchResults.teamB[i] === true) {
                teamBWinInd.push(1);
            }else teamBWinInd.push(0);
        }
      

  return (
    <>
   <div className='text-center text-3xl font-bold text-[#142539] mt-6'>
    Winning Chart
   </div>
    <div className="p-2 mt-10 shadow-lg rounded-lg w-3/4 mx-auto bg-[#111922] text-white">
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell className="font-bold text-[#6094d0]">Team</TableCell>
          {matchResults.teamA.map((_, index) => (
            <TableCell key={index} className="text-center text-[#6094d0]">
              {index + 1}
            </TableCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-bold">Team A</TableCell>
          {matchResults.teamA.map((won, index) => (
            <TableCell key={index} className="text-center">
              {won && teamAWinInd[index] && !teamBWinInd[index]  && (
                <Trophy className="w-5 h-5 text-green-500 mx-auto" />
              )}
              {!teamAWinInd[index] && !teamBWinInd[index] &&(
                 <Equal className="w-4 h-4 text-blue-500" />
              )}
            </TableCell>
            
          ))}
        </TableRow>
        <TableRow>
          <TableCell className="font-bold">Team B</TableCell>
          {matchResults.teamB.map((won, index) => (
            <TableCell key={index} className="text-center">
              {won && <Trophy className="w-5 h-5 text-red-500 mx-auto" />}
              {!teamAWinInd[index] && !teamBWinInd[index] &&(
                 <Equal className="w-4 h-4 text-blue-500" />
              )}
            </TableCell>
            
          ))}
        </TableRow>
      </TableBody>
    </Table>
  </div>
  </>
  )
}

export default Winning

