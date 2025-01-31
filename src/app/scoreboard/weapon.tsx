import React from 'react';
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import Image from 'next/image';
// import { StaticImage } from 'gatsby-plugin-image';

const WeaponStatsTable = () => {
  const weaponData = [
    {
      name: 'Vandal',
      image: '/vandal.png',
      kills: 13,
      damage: 2563
    },
    {
      name: 'Classic',
      image: '/classic.png',
      kills: 2,
      damage: 312
    },
    {
      name: 'Ghost',
      image: '/ghost.png',
      kills: 1,
      damage: 120
    }
  ];

  return (
    <>
    <div className="text-center text-3xl font-bold text-[#142539] mt-6">
        Weapon Analysis
    </div>
    <div className="p-2 shadow-lg rounded-lg mt-10 w-3/4 mx-auto bg-[#111922] text-white">
      <Table className="rounded-lg overflow-hidden">
        <TableHeader>
          <TableRow>
            <TableCell className="font-bold text-[#6094d0]">Weapon</TableCell>
            <TableCell className="font-bold text-[#6094d0] text-center">Kills</TableCell>
            <TableCell className="font-bold text-[#6094d0] text-right">Damage</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {weaponData.map((weapon, index) => (
            <TableRow key={index}>
              <TableCell className="flex items-center gap-4">
                <Image
                  src={weapon.image}
                  alt={weapon.name}
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <span>{weapon.name}</span>
              </TableCell>
              <TableCell className="text-center">{weapon.kills}</TableCell>
              <TableCell className="text-right">{weapon.damage.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </>
  );
};

export default WeaponStatsTable;